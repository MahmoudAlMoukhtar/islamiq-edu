import {useState} from "react";
import "./newcourse.css";
import * as api from "../../api/index";
import SectionsList from "./SectionsList";
import Resizer from "react-image-file-resizer";
import {toast} from "react-toastify";
import {TbTrashXFilled} from "react-icons/tb";

export default function Newcourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    sections: [],
  });
  const [sectionData, setSectionData] = useState({
    uuid: "",
    video: "",
    description: "",
    image: false,
  });

  //const [imagesSections, setImagesSections] = useState([]);
  const [thum, setThum] = useState();
  const [imageValueThum, setImageValueThum] = useState();
  const [imageValue, setImageValue] = useState();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingSection, setLoadingSection] = useState(false);
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
      setSectionData({...sectionData, image});
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
          800,
          800,
          "WEBP",
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
    const formData = new FormData();
    if (sectionData.video) {
      function youtube_parser(url) {
        var regExp =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return match && match[7].length == 11 ? match[7] : false;
      }
      const idYoutube = youtube_parser(sectionData.video);
      formData.append("video", idYoutube);
    }

    formData.append("image", sectionData.image);
    formData.append("description", sectionData.description);
    formData.append("descriptionAr", sectionData.descriptionAr);
    try {
      setLoadingSection(true);
      const res = await api.addSection(courseData._id, formData);
      setCourseData(res.data);
      setSectionData({...sectionData, image: ""});
      setLoadingSection(false);
      setImageValue();
      toast.success("The section has been added to the course successfully~");
    } catch (err) {
      toast.error(
        "There is an error adding the course, You Should Creat Course Then Add Sections To it"
      );
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageThum", thum);
    formData.append("title", courseData.title);
    formData.append("titleAr", courseData.titleAr);
    //formData.append("sections", JSON.stringify(courseData.sections));
    setLoadingCreateCourse(true);
    const res = await api.createCourse(formData);
    setCourseData(res.data);
    setLoadingCreateCourse(false);
    toast.success("The course was created and published successfully!");
    setLoading(false);
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <p>Loading</p>;
  return (
    <div className="newcourse flex flex-col gap-20">
      <h1 className="addcourseTitle  text-4xl font-bold">New Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <label className=" text-xl font-bold">Title Course</label>
          <input
            required
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Title Course"
            onChange={e =>
              setCourseData({...courseData, title: e.target.value})
            }
          />
        </div>
        <div className="w-full">
          <label className=" text-xl font-bold">
            عنوان الكورس باللغة العربية
          </label>
          <input
            dir="rtl"
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
          <label>Thumbnail Course Image</label>
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
        <div className="addcourseForm w-full">
          <p role="alert" className="text-red-600">
            Click (CREATE COURSE) button then add sections to it
          </p>
          <button
            className="bg-green-400 font-bold w-full py-4 text-lg"
            type="submit"
          >
            {loadingCreateCourse ? "Wait..." : "CREATE COURSE"}
          </button>
        </div>
      </form>
      <form
        onSubmit={handleAddSection}
        className="flex flex-col w-full gap-2 p-2"
      >
        <h2 className=" text-xl font-bold">Add section</h2>
        <div className=" w-full">
          <label>Image</label>
          <div className="flex justify-between items-center gap-2">
            <input
              type="file"
              id="image"
              name="image"
              htmlFor="image"
              onChange={handleUpload}
            />
            <div
              className="cursor-pointer bg-red-600 rounded py-1 px-2 text-white"
              onClick={() => {
                setImageValue("");
                setSectionData({...sectionData, image: ""});
              }}
            >
              Remove
            </div>
          </div>
        </div>
        {imageValue && <img src={imageValue} alt="image section" />}
        <div className="w-full">
          <div className="flex justify-between items-center gap-2 w-full">
            <label>Link Video</label>
            <div
              className="cursor-pointer bg-red-600 rounded py-1 px-2 text-white"
              onClick={() => {
                setSectionData({...sectionData, video: ""});
              }}
            >
              Remove
            </div>
          </div>
          <input
            type="text"
            value={sectionData.video}
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
            required
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
            required
            type="text"
            dir="rtl"
            className="border-b-[1px] border-black  rounded w-full p-2 h-60"
            placeholder="وصف القسم باللغة العربية"
            onChange={e =>
              setSectionData({...sectionData, descriptionAr: e.target.value})
            }
          />
        </div>

        <button className="bg-[#FF932D] text-white p-2 ">
          {loadingSection ? "Wait..." : "Add Section"}
        </button>
      </form>

      <SectionsList courseData={courseData} setCourseData={setCourseData} />
    </div>
  );
}
