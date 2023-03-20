import {useState} from "react";
import "./newcourse.css";
import * as api from "../../api/index";
import SectionsList from "./SectionsList";
import Resizer from "react-image-file-resizer";
import GridLoader from "react-spinners/GridLoader";
import {toast} from "react-toastify";
import {v4 as uuidv4} from "uuid";

export default function Newcourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    sections: [],
  });
  const [sectionData, setSectionData] = useState({
    uuid: "",
    video: "",
    description: "",
  });

  const [imagesSections, setImagesSections] = useState([]);
  const [thum, setThum] = useState();
  const [imageValueThum, setImageValueThum] = useState();
  const [imageValue, setImageValue] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCreateCourse, setLoadingCreateCourse] = useState(false);

  const handleUpload = async e => {
    const file = e.target.files[0];
    const resizeFile = file =>
      new Promise(resolve => {
        Resizer.imageFileResizer(
          file,
          300,
          300,
          "JPEG",
          100,
          0,
          uri => {
            resolve(uri);
          },
          "file"
        );
      });
    const image = await resizeFile(file);
    const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validFileTypes.find(type => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    } else {
      setImagesSections([...imagesSections, image]);
      var reader = new FileReader();
      reader.onload = function (e) {
        setImageValue(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUploadThum = async e => {
    const file = e.target.files[0];
    const resizeFile = file =>
      new Promise(resolve => {
        Resizer.imageFileResizer(
          file,
          300,
          300,
          "JPEG",
          100,
          0,
          uri => {
            resolve(uri);
          },
          "file"
        );
      });
    const image = await resizeFile(file);
    const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validFileTypes.find(type => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    } else {
      setThum(image);
      var reader = new FileReader();
      reader.onload = function (e) {
        setImageValueThum(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSection = async e => {
    e.preventDefault();
    if (sectionData.video) {
      function youtube_parser(url) {
        var regExp =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return match && match[7].length == 11 ? match[7] : false;
      }

      const idYoutube = youtube_parser(sectionData.video);
      setCourseData({
        ...courseData,
        sections: [
          ...courseData.sections,
          {...sectionData, video: idYoutube, uuid: uuidv4()},
        ],
      });
      //console.log(courseData.sections);
    } else {
      setCourseData({
        ...courseData,
        sections: [...courseData.sections, {...sectionData, uuid: uuidv4()}],
      });
      //console.log(courseData.sections);
    }
    toast.success("Add Section successfully!");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    //console.log(imagesSections);
    formData.append("images", thum);
    for (const image of imagesSections) {
      formData.append("images", image);
    }
    formData.append("title", courseData.title);
    formData.append("titleAr", courseData.title);
    formData.append("sections", JSON.stringify(courseData.sections));
    //console.log(formData)
    setLoadingCreateCourse(true);
    await api.createCourse(formData);
    setLoadingCreateCourse(false);
    toast.success("Create Course successfully!");
    setLoading(false);
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <p>Loading</p>;
  return (
    <form onSubmit={handleSubmit} className="newcourse flex flex-col gap-20">
      <h1 className="addcourseTitle  text-4xl font-bold">New Course</h1>
      <div className="w-full">
        <label className=" text-xl font-bold">Title Course</label>
        <input
          required
          type="text"
          className="border-b-[1px] border-black  rounded w-full  p-2"
          placeholder="Title Course"
          onChange={e => setCourseData({...courseData, title: e.target.value})}
        />
      </div>
      <div className="w-full">
        <label className=" text-xl font-bold">
          عنوان الكورس باللغة العربية
        </label>
        <input
          required
          type="text"
          className="border-b-[1px] border-black  rounded w-full  p-2"
          placeholder="عنوان الكورس باللغة العربية"
          onChange={e =>
            setCourseData({...courseData, titleAr: e.target.value})
          }
        />
      </div>
      <div className="addcourseItem">
        <label>Thum Image</label>
        <input
          required
          type="file"
          id="thumImage"
          name="thumImage"
          htmlFor="thumImage"
          onChange={handleUploadThum}
        />

        {imageValueThum && <img src={imageValueThum} alt="image section" />}
      </div>

      <section className="flex flex-col w-full p-2">
        <h2 className=" text-xl font-bold">Add section</h2>
        <div className="addcourseItem">
          <label>Image</label>
          <div className="flex justify-between items-center gap-4 w-full">
            <input
              type="file"
              id="image"
              name="image"
              htmlFor="image"
              onChange={handleUpload}
            />
            <button className=" p-2 rounded shadow-xl border-[1px] border-black">
              Remove
            </button>
          </div>
        </div>
        {imageValue && <img src={imageValue} alt="image section" />}
        <div className="w-full">
          <label>Link Video</label>
          <textarea
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Link video from youtube"
            onChange={e =>
              setSectionData({...sectionData, video: e.target.value})
            }
          />
        </div>
        <div className="w-full">
          <label>Description</label>
          <textarea
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2 h-60"
            placeholder="Description section"
            onChange={e =>
              setSectionData({...sectionData, description: e.target.value})
            }
          />
        </div>
        <div className="w-full">
          <label>وصف القسم بالغة العربية</label>
          <textarea
            type="text"
            className="border-b-[1px] border-black  rounded w-full p-2 h-60"
            placeholder="وصف القسم باللغة العربية"
            onChange={e =>
              setSectionData({...sectionData, descriptionAr: e.target.value})
            }
          />
        </div>

        <button
          className="bg-[#FF932D] text-white p-2 "
          onClick={handleAddSection}
        >
          Add Section
        </button>
      </section>
      <div className="addcourseForm w-full">
        <button
          className="bg-green-400 font-bold w-full py-4 text-lg"
          type="submit"
        >
          {loadingCreateCourse
            ? "Wait..."
            : "POST THE COURSE TO THE MAIN WEBSITE"}
        </button>
      </div>
      <SectionsList courseData={courseData} setCourseData={setCourseData} />
    </form>
  );
}
