import {useState} from "react";
import "./newcourse.css";
import * as api from "../../api/index";
import SectionsList from "./SectionsList";
import {ToastContainer} from "react-toastify";
import Resizer from "react-image-file-resizer";
export default function Newcourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    sections: [],
    teachers: [],
  });
  const [sectionData, setSectionData] = useState({
    description: "",
  });
  const [teacherData, setTeacherData] = useState({
    name: "",
    bio: "",
    gender: "",
  });
  const [imagesSections, setImagesSections] = useState([]);
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
      //setSectionData({...sectionData, image});
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      // setSectionData({...sectionData, image: reader.result});
      // };
    }
  };

  const handleAddSection = async e => {
    e.preventDefault();
    console.log(imagesSections);
    console.log(sectionData);
    setCourseData({
      ...courseData,
      sections: [...courseData.sections, sectionData],
    });
    //console.log(courseData);
  };
  const handleAddTeacher = async e => {
    e.preventDefault();
    setCourseData({
      ...courseData,
      teachers: [...courseData.teachers, teacherData],
    });
    console.log(courseData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    for (const image of imagesSections) {
      formData.append("images", image);
    }
    //formData.append("images", imagesSections);
    formData.append("title", courseData.title);
    formData.append("teachers", JSON.stringify(courseData.teachers));
    formData.append("sections", JSON.stringify(courseData.sections));
    console.log(formData);
    const res = await api.createCourse(formData);
    setLoading(false);
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 course">Loading</h1>;
  return (
    <div className="newcourse flex flex-col gap-20">
      <h1 className="addcourseTitle  text-4xl font-bold">New Course</h1>
      <div className="w-full">
        <label className=" text-xl font-bold">Title Course</label>
        <input
          type="text"
          className="border-2  rounded w-full  py-2"
          placeholder="Title Course"
          onChange={e => setCourseData({...courseData, title: e.target.value})}
        />
      </div>
      <section className="flex flex-col w-full p-2 shadow-xl">
        <h2 className=" text-xl font-bold">Add Teacher</h2>
        <div className="w-full">
          <label>Teacher Name</label>
          <input
            type="text"
            className="border-2  rounded w-full  py-2"
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
            className="border-2  rounded w-full  py-2"
            placeholder="Teacher Bio"
            onChange={e =>
              setTeacherData({...teacherData, bio: e.target.value})
            }
          />
        </div>
        <select
          id="gender"
          name="gender"
          className="w-full p-4 rounded cursor-pointer border-2"
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
      <section className="flex flex-col w-full p-2 shadow-xl">
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
        {sectionData.image && (
          <img src={sectionData.image} alt="image section" />
        )}
        <div className="w-full">
          <label>Description</label>
          <textarea
            type="text"
            className="border-2  rounded w-full  py-2"
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
      <ToastContainer />
    </div>
  );
}
