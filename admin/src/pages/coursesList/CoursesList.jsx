import "./coursesList.css";
import {DataGrid} from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
import {productRows} from "../../dummyData";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";
export default function CoursesList() {
  const [data, setDataProducts] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseProducts = await api.fetchCourses();
        setDataProducts(responseProducts.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const res = await api.deleteCourseById(id);
    setDataProducts(data.filter(item => item._id !== res.data._id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

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
      field: "teachers",
      headerName: "Teachers number",
      width: 200,
      renderCell: params => {
        return (
          <div className="productListItem">{params.row.teachers.length}</div>
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
            <Link to={"/course/" + params.row._id}>
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
      <button
        className="addProductList"
        onClick={() => navigate.push("/newproduct")}
      >
        Add new product
      </button>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
}
