import {useState} from "react";
import "./newcourse.css";
import * as api from "../../api/index";
import {toast, ToastContainer} from "react-toastify";
import Resizer from "react-image-file-resizer";
import GridLoader from "react-spinners/GridLoader";
export default function NewNewsLetter() {
  const [newsLetterData, setNewsLetterData] = useState({
    title: "",
    message: "",
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
      formData.append("imageNewsLetter", fileData);
    }
    formData.append("password", newsLetterData.password);
    formData.append("title", newsLetterData.title);
    formData.append("message", newsLetterData.message);
    setLoading(true);
    try {
      const res = await api.createNewsLetter(formData);
      toast.success("send successfully");
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };
  if (error)
    return (
      <h1 className="text-red-800">
        Somthing is erro check if exist email not valid
      </h1>
    );
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
    <div className="min-w-[300px] shadow-xl flex flex-col gap-8 items-start w-full justify-start bg-white p-2 transition duration-200 rounded-md">
      <h1 className="font-bold flex flex-col gap-1 items-start">
        Form New News Letter
        <span className="text-sm text-gray-400 font-normal">
          write your post and puplish it...
        </span>
      </h1>
      <form className="w-full">
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            title
          </label>
          <div className="mt-1">
            <input
              id="title"
              required
              name="title"
              placeholder="title"
              value={newsLetterData.title}
              className="block w-full h-8 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={e => {
                setNewsLetterData({...newsLetterData, title: e.target.value});
              }}
            />
            <input
              id="password"
              required
              name="password"
              placeholder="password"
              value={newsLetterData.password}
              className="block w-full h-8 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={e => {
                setNewsLetterData({
                  ...newsLetterData,
                  password: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              required
              name="message"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="message"
              value={newsLetterData.message}
              onChange={e => {
                setNewsLetterData({...newsLetterData, message: e.target.value});
              }}
            />
          </div>
        </div>

        {newsLetterData.image && <img src={images} alt="blog" />}
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
              id="imageNewsLetter"
              name="imageNewsLetter"
              htmlFor="imageNewsLetter"
              className="block w-full h-8 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleUpload}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-[#4caf50] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#FF932D] focus:outline-none focus:ring-2 focus:ring-[#FF932D] focus:ring-offset-2 w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
