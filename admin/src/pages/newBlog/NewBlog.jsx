import {useState} from "react";
import "./newcourse.css";
import * as api from "../../api/index";
import {toast, ToastContainer} from "react-toastify";
import Resizer from "react-image-file-resizer";
//import GridLoader from "react-spinners/GridLoader";
export default function NewBlog() {
  const [blogData, setBlogData] = useState({
    title: "",
    titleAr: "",
    message: "",
    messageAr: "",
  });
  const [fileData, setFileData] = useState("");
  const [images, setFile] = useState("");

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
      setFileData(image);
      setFile(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    if (fileData) {
      formData.append("image", fileData);
    }
    formData.append("title", blogData.title);
    formData.append("titleAr", blogData.titleAr);
    formData.append("message", blogData.message);
    formData.append("messageAr", blogData.messageAr);
    setLoading(true);
    await api.createPost(formData);
    toast.success("Blog added successfully");
    setLoading(false);
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1>Loading</h1>;
  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[300px] shadow-xl flex flex-col gap-8 items-start w-full justify-start bg-white p-2 transition duration-200 rounded-md"
    >
      <h1 className="font-bold flex flex-col gap-1 items-start">
        Form New Blog
        <span className="text-sm text-gray-400 font-normal">
          write your post and puplish it...
        </span>
      </h1>
      <div className="w-full">
        {error && <h1 className="text-red-700 font-semibold">{error}</h1>}
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700"
        >
          image
        </label>
        <div className="mt-1">
          <input
            type="file"
            required
            id="upload"
            name="image"
            htmlFor="image"
            className="block w-full h-8 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={handleUpload}
          />
        </div>
      </div>
      {blogData.image && <img src={images} alt="blog" />}

      <div className="w-full">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title Blog In English Language
        </label>
        <div className="mt-1">
          <input
            id="title"
            required
            minLength={5}
            name="title"
            placeholder="title"
            value={blogData.title}
            className="block w-full h-8 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={e => {
              setBlogData({...blogData, title: e.target.value});
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          عنوان المدونة باللغة العربية
        </label>
        <div className="mt-1">
          <input
            id="titleAr"
            required
            minLength={5}
            name="titleAr"
            placeholder="عنوان المدونة باللغة العربية"
            value={blogData.titleAr}
            className="block w-full h-8 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={e => {
              setBlogData({...blogData, titleAr: e.target.value});
            }}
          />
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message Blog In English Language
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            required
            minLength={200}
            name="message"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-80 border-b-2 border-black"
            placeholder="message"
            value={blogData.message}
            onChange={e => {
              setBlogData({...blogData, message: e.target.value});
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          رسالة المدونة باللغة العربية
        </label>
        <div className="mt-1">
          <textarea
            id="messageAr"
            required
            minLength={200}
            name="messageAr"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-80 border-b-2 border-black"
            placeholder="رسالة المدونة باللغة العربية"
            value={blogData.messageAr}
            onChange={e => {
              setBlogData({...blogData, messageAr: e.target.value});
            }}
          />
        </div>
      </div>

      <div className="flex gap-2 py-2 w-full">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-[#4caf50] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#FF932D] focus:outline-none focus:ring-2 focus:ring-[#FF932D] focus:ring-offset-2 w-full"
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
