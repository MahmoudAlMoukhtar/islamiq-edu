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

  const handleDelete = async title => {
    setCourseData(courseData.sections.filter(item => item.title !== title));
  };

  const columns = [
    {field: "_id", headerName: "ID", width: 150},
    {
      field: "image",
      headerName: "Image Course",
      width: 200,
      renderCell: params => {
        return (
          <img src={params.row.sections[0].image} className="productListImg" />
        );
      },
    },
    {
      field: "title",
      headerName: "Title Course",
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.title}</div>;
      },
    },
    {
      field: "sections",
      headerName: "Sections number",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem">{params.row.sections.length}</div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        //console.log(params.row);
        return (
          <div className="containerActionsBtns">
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
