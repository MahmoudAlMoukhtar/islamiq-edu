import "./productList.css";
import {DataGrid} from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
import {Link, useHistory} from "react-router-dom";
import React from "react";
import * as api from "../../api/index";
export default function SectionsList({courseData, setCourseData}) {
  const navigate = useHistory();
  const handleDelete = async (idCourse, idSection) => {
    console.log(idSection);
    console.log(idCourse);
    const res = await api.deleteSection(idCourse, idSection);
    const sectionsAfterDelete = courseData.sections.filter(
      item => item._id !== idSection
    );
    setCourseData({...courseData, sections: sectionsAfterDelete});
    if (sectionsAfterDelete.length === 0) {
      navigate.push("/admin/courses");
    }
  };

  const columns = [
    {field: "_id", headerName: "ID", width: 150},
    {
      field: "image",
      headerName: "Header Section (image/video)",
      width: 300,
      renderCell: params => {
        //console.log(params);
        if (params.row.image) {
          return <img src={params.row.image} alt="section" />;
        } else if (params.row.video) {
          return (
            <a
              className="text-[#1512a8]"
              target={"blank"}
              href={`https://www.youtube.com/watch?v=${params.row.video}`}
            >
              {`https://www.youtube.com/watch?v=${params.row.video}`}
            </a>
          );
        } else {
          return <p>Empty</p>;
        }
      },
    },
    {
      field: "description",
      headerName: "description",
      width: 200,
      renderCell: params => {
        //console.log(params);
        return <p>{params.row.description}</p>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        //console.log(params.row);
        return (
          <div className="containerActionsBtns w-full">
            <button
              className="productListDelete w-full"
              onClick={() => handleDelete(courseData._id, params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-screen mt-10">
      <h2 className="text-3xl font-bold">SECTIONS COURSE LIST</h2>
      <DataGrid
        rows={courseData.sections}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
}
