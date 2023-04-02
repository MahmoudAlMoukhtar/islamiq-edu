import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as api from "../../api/index";
import "./course.css";
import SectionsList from "./SectionsList";
import Resizer from "react-image-file-resizer";
import {toast} from "react-toastify";

export default function Course() {
  const {id} = useParams();
  const [courseData, setCourseData] = useState();
  const [imagesSections, setImagesSections] = useState([]);
  const [imageThum, setImageThum] = useState();
  const [imageValue, setImageValue] = useState();
  const [imageValueSection, setImageValueSection] = useState();
  const [sectionData, setSectionData] = useState({
    description: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSection, setLoadingSection] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchCourseById(id);
        setCourseData(response.data);
        setImageThum(response.data.thum);
        setImageValue(response.data.thum);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleAddSection = async e => {
    e.preventDefault();
    const formData = new FormData();
    function youtube_parser(url) {
      var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    }
    if (sectionData.video) {
      const idYoutube = youtube_parser(sectionData.video);
      formData.append("video", idYoutube);
    } else {
      formData.append("video", "");
    }
    formData.append("image", sectionData.image);
    formData.append("description", sectionData.description);
    formData.append("descriptionAr", sectionData.descriptionAr);
    try {
      setLoadingSection(true);
      const res = await api.addSection(courseData._id, formData);
      setLoadingSection(false);
      setCourseData(res.data);
      toast.success("The section has been added to the course successfully~");
    } catch (err) {
      toast.error("There is an error adding the course");
    }
  };

  const handleUpdate = async e => {
    e.preventDefault();
    const formData = new FormData();
    setImagesSections([imageThum, ...imagesSections]);

    formData.append("images", imageThum);
    if (courseData.title) {
      formData.append("title", courseData.title);
      formData.append("titleAr", courseData.titleAr);
    }

    setLoading(true);
    const res = await api.updateCourse(id, formData);
    toast.success("The course has been updated successfully!");
    setLoading(false);
    setCourseData(res.data);
  };

  const handleUpload = async e => {
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
      setSectionData({...sectionData, image});
      var reader = new FileReader();
      reader.onload = function (e) {
        setImageValueSection(e.target.result);
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
      setImageThum(image);
      var reader = new FileReader();
      reader.onload = function (e) {
        setImageValue(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 course">Loading</h1>;
  return (
    <div className="course w-full">
      <div className="courseTitleContainer">
        <h1 className="courseTitle text-3xl font-bold">{courseData.title}</h1>
      </div>
      <div className="courseTop flex-col sm:flex-row">
        <div className="courseTopRight">
          <img src={imageValue} alt="" className="w-full" />
        </div>
        <div className="courseTopRight">
          <div className="courseInfoTop w-full">
            <img src={imageValue} alt="" className="courseInfoImg" />
            <span className="courseName">{courseData.title}</span>
          </div>
          <div className="courseInfoBottom w-full flex flex-col gap-4">
            <div className="courseInfoItem w-full">
              <span className="courseInfoKey">id:</span>
              <span className="courseInfoValue">{courseData._id}</span>
            </div>
            <div className=" w-full">
              <span className="courseInfoKey w-full">Title Course:</span>
              <span className="courseInfoValue w-full">{courseData.title}</span>
            </div>
            <div className="courseInfoItem w-full">
              <span className="courseInfoKey">Number Sections:</span>
              <span className="courseInfoValue">
                {courseData.sections.length}
              </span>
            </div>
            <div className="flex flex-row-reverse w-full">
              <span className="courseInfoKey w-full" dir="rtl">
                عنوان الكورس باللغة العربية:
              </span>
              <span className="courseInfoValue w-full">
                {courseData.titleAr}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="courseBottom ">
        <form className="courseForm flex flex-col sm:flex-row  my-4">
          <div className="courseFormLeft">
            <label>Course Title</label>
            <input
              type="text"
              placeholder="Title Course"
              onChange={e =>
                setCourseData({...courseData, title: e.target.value})
              }
            />
            <div className="courseFormLeft">
              <label dir="rtl">عنوان الكورس باللغة العربية</label>
              <input
                dir="rtl"
                type="text"
                placeholder="عنوان الكورس"
                onChange={e =>
                  setCourseData({...courseData, titleAr: e.target.value})
                }
              />
            </div>
          </div>

          <div className="courseFormRight">
            <div className="courseUpload">
              <img src={imageValue} alt="" className="courseUploadImg" />
              <div className="flex flex-col gap-2">
                <label for="file">Thum Image</label>
                <input type="file" id="file" onChange={handleUploadThum} />
              </div>
            </div>
          </div>
        </form>
        <button
          className="courseButton w-full"
          type="submit"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
      <form
        onSubmit={handleAddSection}
        className="flex flex-col w-full p-2 shadow-xl"
      >
        <h2 className=" text-xl font-bold">Add section</h2>
        <div className="addcourseItem">
          <label>Image</label>
          <input
            type="file"
            id="images"
            name="images"
            htmlFor="images"
            onChange={handleUpload}
          />
        </div>
        {imageValueSection && (
          <img src={imageValueSection} alt="image section" />
        )}
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
            required
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Description section"
            onChange={e =>
              setSectionData({...sectionData, description: e.target.value})
            }
          />
        </div>
        <div className="w-full" dir="rtl">
          <label>وصف القسم ياللغة العربية</label>
          <textarea
            type="text"
            required
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="وصف القسم"
            onChange={e =>
              setSectionData({...sectionData, descriptionAr: e.target.value})
            }
          />
        </div>

        <button type="submit" className="bg-[#FF932D] text-white p-2 rounded">
          {loadingSection ? "Wait..." : "Add Section"}
        </button>
      </form>
      <SectionsList courseData={courseData} setCourseData={setCourseData} />
    </div>
  );
}
