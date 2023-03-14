import {useState} from "react";
import "./newcourse.css";
import * as api from "../../api/index";
import SectionsList from "./SectionsList";
import Resizer from "react-image-file-resizer";
import TeacherList from "./TeachersList";
import GridLoader from "react-spinners/GridLoader";
import {toast, ToastContainer} from "react-toastify";
export default function Newcourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    sections: [],
    teachers: [],
  });
  const [sectionData, setSectionData] = useState({
    video: "",
    description: "",
  });
  const [teacherData, setTeacherData] = useState({
    name: "",
    bio: "",
    gender: "Male",
  });
  const [imagesSections, setImagesSections] = useState([]);
  const [imageValue, setImageValue] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setImageValue(e.target.value);
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
      setImagesSections([image, ...imagesSections]);
      setImageValue(e.target.value);
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
        sections: [...courseData.sections, {...sectionData, video: idYoutube}],
      });
    } else {
      setCourseData({
        ...courseData,
        sections: [...courseData.sections, {...sectionData}],
      });
    }
    toast.success("Add Section successfully!");
  };
  const handleAddTeacher = async e => {
    e.preventDefault();
    setCourseData({
      ...courseData,
      teachers: [...courseData.teachers, teacherData],
    });
    toast.success("Add Teacher successfully!");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    for (const image of imagesSections) {
      formData.append("images", image);
    }
    formData.append("title", courseData.title);
    formData.append("teachers", JSON.stringify(courseData.teachers));
    formData.append("sections", JSON.stringify(courseData.sections));
    const res = await api.createCourse(formData);
    toast.success("Create Course successfully!");
    setLoading(false);
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading)
    return (
      <GridLoader
        color={"#0000"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  return (
    <div className="newcourse flex flex-col gap-20">
      <h1 className="addcourseTitle  text-4xl font-bold">New Course</h1>
      <div className="w-full">
        <label className=" text-xl font-bold">Title Course</label>
        <input
          type="text"
          className="border-b-[1px] border-black  rounded w-full  p-2"
          placeholder="Title Course"
          onChange={e => setCourseData({...courseData, title: e.target.value})}
        />
      </div>
      <div className="addcourseItem">
        <label>Thum Image</label>
        <input
          type="file"
          id="thumImage"
          name="thumImage"
          htmlFor="thumImage"
          onChange={handleUploadThum}
        />
      </div>
      <section className="flex flex-col w-full p-2">
        <h2 className=" text-xl font-bold">Add Teacher</h2>
        <div className="w-full">
          <label>Teacher Name</label>
          <input
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Teacher Name"
            onChange={e =>
              setTeacherData({...teacherData, name: e.target.value})
            }
          />
        </div>
        <div className="w-full">
          <label>Teacher Bio</label>
          <textarea
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Teacher Bio"
            onChange={e =>
              setTeacherData({...teacherData, bio: e.target.value})
            }
          />
        </div>
        <select
          id="gender"
          name="gender"
          className="w-full p-4 rounded cursor-pointer border-2 border-[1px] my-2"
          onChange={e =>
            setTeacherData({...teacherData, gender: e.target.value})
          }
        >
          <option value="Male">Male</option>
          <option value="Fmale">Fmale</option>
        </select>
        <button
          className="bg-[#FF932D] text-white p-2 "
          onClick={handleAddTeacher}
        >
          Add Teacher
        </button>
      </section>
      <section className="flex flex-col w-full p-2">
        <h2 className=" text-xl font-bold">Add section</h2>
        <div className="addcourseItem">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="image"
            htmlFor="image"
            onChange={handleUpload}
          />
        </div>
        {imageValue && <img src={imageValue} alt="image section" />}
        <div className="w-full">
          <label>Link Video</label>
          <textarea
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Description section"
            onChange={e =>
              setSectionData({...sectionData, video: e.target.value})
            }
          />
        </div>
        <div className="w-full">
          <label>Description</label>
          <textarea
            type="text"
            className="border-b-[1px] border-black  rounded w-full  p-2"
            placeholder="Description section"
            onChange={e =>
              setSectionData({...sectionData, description: e.target.value})
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
      <form className="addcourseForm w-full">
        <button
          className="bg-green-400 py-2 font-bold w-full"
          type="submit"
          onClick={handleSubmit}
        >
          Create Course
        </button>
      </form>
      <SectionsList courseData={courseData} setCourseData={setCourseData} />
      <TeacherList courseData={courseData} setCourseData={setCourseData} />
      <ToastContainer />
    </div>
  );
}
