import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as api from "../../api/index";
import "./course.css";
import SectionsList from "./SectionsList";
import Resizer from "react-image-file-resizer";

export default function Course() {
  const {id} = useParams();
  const [courseData, setCourseData] = useState();
  const [imagesSections, setImagesSections] = useState([]);
  const [imageValue, setImageValue] = useState();
  const [sectionData, setSectionData] = useState({
    description: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchCourseById(id);
        setCourseData(response.data);
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
    console.log(imagesSections);
    console.log(sectionData);
    setCourseData({
      ...courseData,
      sections: [...courseData.sections, sectionData],
    });
  };

  const handleUpdate = async e => {
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
    setLoading(false);
    setCourseData(res.data);
    console.log("res.data", res.data);
  };

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

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 course">Loading</h1>;
  if (courseData?.sections.length === 0) return <h1>Empty</h1>;
  return (
    <div className="course">
      <div className="courseTitleContainer">
        <h1 className="courseTitle text-3xl font-bold">
          {courseData.title} Course
        </h1>
        <Link to="/newcourse">
          <button className="courseAddButton">Create</button>
        </Link>
      </div>
      <div className="courseTop">
        <div className="courseTopRight">
          <img src={courseData.sections[0].image} alt="" className="w-full" />
        </div>
        <div className="courseTopRight">
          <div className="courseInfoTop">
            <img
              src={courseData.sections[0].image}
              alt=""
              className="courseInfoImg"
            />
            <span className="courseName">{courseData.name}</span>
          </div>
          <div className="courseInfoBottom">
            <div className="courseInfoItem">
              <span className="courseInfoKey">id:</span>
              <span className="courseInfoValue">{courseData._id}</span>
            </div>
            <div className="courseInfoItem">
              <span className="courseInfoKey">Title Course:</span>
              <span className="courseInfoValue">{courseData.title}</span>
            </div>
            <div className="courseInfoItem">
              <span className="courseInfoKey">Number Sections:</span>
              <span className="courseInfoValue">
                {courseData.sections.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="courseBottom">
        <form className="courseForm my-4">
          <div className="courseFormLeft">
            <label>Course Title</label>
            <input
              type="text"
              placeholder="Apple AirPod"
              onChange={e =>
                setCourseData({...courseData, title: e.target.value})
              }
            />
          </div>

          <div className="courseFormRight">
            <div className="courseUpload">
              <img
                src={courseData.sections[0].image}
                alt=""
                className="courseUploadImg"
              />
              <label for="file"></label>
              <input type="file" id="file" style={{display: "none"}} />
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
        {imageValue && <img src={imageValue} alt="image section" />}
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
      {courseData.sections.length > 0 && (
        <SectionsList
          courseData={courseData}
          setCourseData={setCourseData}
          id={id}
        />
      )}
    </div>
  );
}
/* <Publish/> */
