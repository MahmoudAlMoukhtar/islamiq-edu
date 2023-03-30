import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
//import {blogData} from "../../dummyData";
import * as api from "../../api/index";
import "./blog.css";
import Resizer from "react-image-file-resizer";
import {toast} from "react-toastify";

// import { Publish } from "@material-ui/icons";

export default function Blog() {
  const {id} = useParams();
  const [datablog, setDatablog] = useState();
  const [fileData, setFileData] = useState("");
  const [imageValueBlog, setImageValueBlog] = useState("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchPostById(id);
        setDatablog(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
    //console.log("test");
  }, []);

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
      setFileData(image);
      var reader = new FileReader();
      reader.onload = function (e) {
        setDatablog({...datablog, image: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async e => {
    e.preventDefault();
    const formData = new FormData();
    if (fileData) {
      formData.append("image", fileData);
    }
    formData.append("title", datablog.title);
    formData.append("titleAr", datablog.titleAr);
    formData.append("message", datablog.message);
    formData.append("messageAr", datablog.messageAr);
    setLoading(true);
    const res = await api.updatePost(id, formData);
    toast.success("The blog has been updated successfully");
    setLoading(false);
    setDatablog(res.data);
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 blog">Loading</h1>;

  return (
    <div className="blog w-full">
      <div className="blogTitleContainer">
        <h1 className="blogTitle">blog</h1>
        <div className="flex gap-2">
          <Link to="/admin/newblog">
            <button className="blogAddButton bg-[#4caf50]">Create</button>
          </Link>
          <Link to="/admin/blogs">
            <button className="blogAddButton bg-[#FF932D]">Back</button>
          </Link>
        </div>
      </div>
      <div className="blogTop flex-col sm:flex-row">
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
              <span className="blogInfoKey">Title Enslish:</span>
              <span className="blogInfoValue">{datablog.title}</span>
            </div>
            <div className="blogInfoItem">
              <span className="blogInfoKey">Title Arabic:</span>
              <span className="blogInfoValue">{datablog.titleAr}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full blogBoxMessage">
        <span className="text-lg font-bold">blog message in engilsh:</span>
        <span className="blogInfoValue">{datablog.message}</span>
        <span className="text-lg font-bold">رسالة المدونة بالعربية:</span>
        <span className="blogInfoValue">{datablog.messageAr}</span>
      </div>
      <div className="blogBottom">
        <form className="blogForm flex flex-col sm:flex-row">
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
              <img src={datablog.image} alt="blog" className="blogUploadImg" />
              <label for="file"></label>
              <input type="file" id="file" style={{display: "none"}} />
            </div>
          </div>
        </form>
        <div className="blogFormLeft">
          <label>Blog Title In English Language</label>
          <input
            type="text"
            placeholder="Apple AirPod"
            className="w-full"
            onChange={e => setDatablog({...datablog, title: e.target.value})}
          />
        </div>
        <div className="blogFormLeft">
          <label>عنوان المدونة باللغة العربية</label>
          <input
            type="text"
            placeholder="عنوان المدونة باللغة العربية"
            className="w-full"
            onChange={e => setDatablog({...datablog, titleAr: e.target.value})}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Blog Message In English Language</label>
          <textarea
            type="text"
            placeholder="blog message"
            className="w-full border-b-[1px] border-black rounded"
            onChange={e => setDatablog({...datablog, message: e.target.value})}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>رسالة المدونة باللغة العربية</label>
          <textarea
            type="text"
            placeholder="رسالة المدونة باللغة العربية"
            className="w-full border-b-[1px] border-black rounded"
            onChange={e =>
              setDatablog({...datablog, messageAr: e.target.value})
            }
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
