import "./productList.css";
import {DataGrid} from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
import {productRows} from "../../dummyData";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";
export default function SectionsList({courseData, setCourseData}) {
  const navigate = useHistory();
  console.log(courseData);
  const handleDelete = async (idSection, idCourse) => {
    console.log(idSection);
    const res = await api.deleteSection(idCourse, idSection);
    setCourseData(courseData.sections.filter(item => item._id !== idSection));
    if (
      courseData.sections.filter(item => item._id !== idSection).length === 0
    ) {
      navigate.push("/newproduct");
    }
  };

  const columns = [
    {field: "_id", headerName: "ID", width: 150},
    {
      field: "image",
      headerName: "Image Course",
      width: 200,
      renderCell: params => {
        console.log(params);
        return <img src={params.row.image} className="productListImg" />;
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
              onClick={() => handleDelete(params.row._id, courseData._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  if (courseData.sections.length === 0) return <h1>Empty</h1>;

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