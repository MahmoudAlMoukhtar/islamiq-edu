import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Chart from "../../components/chart/Chart";
//import {courseData} from "../../dummyData";
import * as api from "../../api/index";
import "./course.css";

// import { Publish } from "@material-ui/icons";

export default function Course() {
  const {id} = useParams();
  const [datacourse, setDatacourse] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchCourseById(id);
        setDatacourse(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
    console.log("test");
  }, []);

  const handleUpdate = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await api.updateCourse(id, datacourse);
    setLoading(false);
    setDatacourse(res.data);
    console.log("res.data", res.data);
  };

  const handleUpload = e => {
    const file = e.target.files[0];
    const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validFileTypes.find(type => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setDatacourse({...datacourse, image: reader.result});
      };
    }
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 course">Loading</h1>;

  return (
    <div className="course">
      <div className="courseTitleContainer">
        <h1 className="courseTitle">course</h1>
        <Link to="/newcourse">
          <button className="courseAddButton">Create</button>
        </Link>
      </div>
      <div className="courseTop">
        <div className="courseTopRight">
          <img src={datacourse.sections[0].image} alt="" className="w-full" />
        </div>
        <div className="courseTopRight">
          <div className="courseInfoTop">
            <img
              src={datacourse.sections[0].image}
              alt=""
              className="courseInfoImg"
            />
            <span className="courseName">{datacourse.name}</span>
          </div>
          <div className="courseInfoBottom">
            <div className="courseInfoItem">
              <span className="courseInfoKey">id:</span>
              <span className="courseInfoValue">{datacourse._id}</span>
            </div>
            <div className="courseInfoItem">
              <span className="courseInfoKey">Title Course:</span>
              <span className="courseInfoValue">{datacourse.title}</span>
            </div>
            <div className="courseInfoItem">
              <span className="courseInfoKey">Number Sections:</span>
              <span className="courseInfoValue">
                {datacourse.sections.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="courseBottom">
        <form className="courseForm my-4">
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
          <div className="courseFormLeft">
            <label>course Name</label>
            <input
              type="text"
              placeholder="Apple AirPod"
              onChange={e =>
                setDatacourse({...datacourse, name: e.target.value})
              }
            />
          </div>

          <div className="courseFormRight">
            <div className="courseUpload">
              <img
                src={datacourse.sections[0].image}
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
    </div>
  );
}
/* <Publish/> */
