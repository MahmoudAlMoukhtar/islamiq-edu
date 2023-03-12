import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Chart from "../../components/chart/Chart";
//import {blogData} from "../../dummyData";
import * as api from "../../api/index";
import "./blog.css";

// import { Publish } from "@material-ui/icons";

export default function Blog() {
  const {id} = useParams();
  const [datablog, setDatablog] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchPostById(id);
        setDatablog(response.data);
        console.log(datablog);
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
    console.log(datablog);
    setLoading(true);
    const res = await api.updatePost(id, datablog);
    setLoading(false);
    console.log("tset");
    setDatablog(res.data);
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
        setDatablog({...datablog, image: reader.result});
      };
    }
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 blog">Loading</h1>;

  return (
    <div className="blog">
      <div className="blogTitleContainer">
        <h1 className="blogTitle">blog</h1>
        <Link to="/newblog">
          <button className="blogAddButton">Create</button>
        </Link>
      </div>
      <div className="blogTop">
        <div className="blogTopLeft">
          <img src={datablog.image} alt="" className="w-full" />
        </div>
        <div className="blogTopRight">
          <div className="blogInfoTop">
            <img src={datablog.image} alt="" className="blogInfoImg" />
          </div>
          <div className="blogInfoBottom">
            <div className="blogInfoItem">
              <span className="blogInfoKey">id:</span>
              <span className="blogInfoValue">{datablog._id}</span>
            </div>
            <div className="blogInfoItem">
              <span className="blogInfoKey">Title:</span>
              <span className="blogInfoValue">{datablog.title}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full blogBoxMessage">
        <span className="text-lg font-bold">message:</span>
        <span className="blogInfoValue">{datablog.message}</span>
      </div>
      <div className="blogBottom">
        <form className="blogForm">
          <div className="addblogItem">
            <label>Image</label>
            <input
              type="file"
              id="image"
              name="image"
              htmlFor="image"
              onChange={handleUpload}
            />
          </div>

          <div className="blogFormRight">
            <div className="blogUpload">
              <img
                src={
                  datablog.image
                    ? datablog.image
                    : "/Placeholder_view_vector.svg.png"
                }
                alt=""
                className="blogUploadImg"
              />
              <label for="file"></label>
              <input type="file" id="file" style={{display: "none"}} />
            </div>
          </div>
        </form>
        <div className="blogFormLeft">
          <label>blog Title</label>
          <input
            type="text"
            placeholder="Apple AirPod"
            className="w-full"
            onChange={e => setDatablog({...datablog, title: e.target.value})}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>message</label>
          <textarea
            type="text"
            placeholder="blog message"
            className="w-full border-b-[1px] border-black rounded"
            onChange={e => setDatablog({...datablog, message: e.target.value})}
          />
        </div>
        <button
          className="blogButton w-full"
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
