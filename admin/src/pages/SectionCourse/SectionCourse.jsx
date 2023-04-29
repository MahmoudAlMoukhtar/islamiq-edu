import {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import * as api from "../../api/index";
import Resizer from "react-image-file-resizer";
import {toast} from "react-toastify";
import {TbTrashXFilled} from "react-icons/tb";

import "./course.css";

export default function SectionCourse() {
  const {idCourse, idSection} = useParams();
  const [courseData, setCourseData] = useState();
  const [imageValue, setImageValue] = useState();
  const navigait = useHistory();
  const [loadingUpload, setLoadingUpload] = useState(false);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchSectionCourseById(idCourse, idSection);
        setCourseData(response.data);
        setImageValue(response.data.image);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleUpdateSection = async e => {
    e.preventDefault();
    function youtube_parser(url) {
      var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    }

    const formData = new FormData();
    if (courseData.video) {
      formData.append("video", youtube_parser(courseData.video));
    } else {
      formData.append("video", "");
    }
    if (courseData.image) {
      formData.append("image", courseData.image);
    } else {
      formData.append("image", "");
    }
    formData.append("description", courseData.description);
    formData.append("descriptionAr", courseData.descriptionAr);
    try {
      setLoadingUpload(true);
      const res = await api.updateSectionById(idCourse, idSection, formData);
      setLoadingUpload(false);
      navigait.push(`/admin/course/${idCourse}`);
      toast.success("The section has been upadted successfully");
    } catch (err) {
      toast.error("There is an error adding the course");
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
      setCourseData({...courseData, image: image});
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
        <h1 className="courseTitle text-3xl font-bold">Section Course</h1>
      </div>
      <div className="courseTop flex-col sm:flex-row">
        <div className="courseTopRight">
          <img src={imageValue} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col w-full blogBoxMessage">
        <span className="text-lg font-bold">
          Section description in engilsh:
        </span>
        <span className="blogInfoValue">{courseData.description}</span>
      </div>
      <div className="flex flex-col w-full blogBoxMessage">
        <span className="text-lg font-bold" dir="rtl">
          وصف القسم بالعربية:
        </span>
        <span className="blogInfoValue" dir="rtl">
          {courseData.descriptionAr}
        </span>
      </div>
      <div className="courseBottom ">
        <form className="flex flex-col gap-10  my-4">
          <div className="courseForm flex flex-col sm:flex-row">
            <div className="courseFormLeft">
              <label>Video Link</label>
              <div className="flex items-center gap-2">
                <div className="courseFormLeft">
                  <input
                    type="text"
                    value={courseData.video}
                    placeholder="Video Link"
                    onChange={e =>
                      setCourseData({
                        ...courseData,
                        video: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setCourseData({...courseData, video: ""});
                  }}
                >
                  <TbTrashXFilled size={30} />
                </div>
              </div>
            </div>

            <div className="courseFormRight">
              <div className="courseUpload">
                <img src={imageValue} alt="" className="courseUploadImg" />
                <div className="flex flex-col font-bold">
                  <label for="file">Image Section</label>
                  <input type="file" id="file" onChange={handleUploadThum} />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setImageValue("");
                    setCourseData({...courseData, image: ""});
                  }}
                >
                  <TbTrashXFilled size={30} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col my-4">
              <label>Section description In English Language</label>
              <textarea
                type="text"
                placeholder="Section description"
                className="w-full border-b-[1px] border-black rounded h-60"
                onChange={e =>
                  setCourseData({...courseData, description: e.target.value})
                }
              />
            </div>
            <div className="flex flex-col my-4">
              <label dir="rtl">وصف القسم باللغة العربية</label>
              <textarea
                dir="rtl"
                type="text"
                placeholder="وصف القسم"
                className="w-full border-b-[1px] border-black rounded h-60"
                onChange={e =>
                  setCourseData({...courseData, descriptionAr: e.target.value})
                }
              />
            </div>
          </div>
        </form>
        <button
          className="bg-green-500 text-white p-2 rounded w-full"
          type="submit"
          onClick={handleUpdateSection}
        >
          {loadingUpload ? "Wait..." : "Update"}
        </button>
      </div>
    </div>
  );
}
