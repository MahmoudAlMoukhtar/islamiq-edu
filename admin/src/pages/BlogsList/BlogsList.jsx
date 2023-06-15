import "./blogsList.css";
import {DataGrid} from "@material-ui/data-grid";

import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";
import {toast} from "react-toastify";

export default function BlogsList({theme}) {
  const [data, setDataProducts] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseProducts = await api.fetchPosts();
        setDataProducts(responseProducts.data);
        //console.log(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const res = await api.deletePost(id);
    toast.success("The blog has been deleted successfully");
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
        return <img src={params.row.image} alt="blog" />;
      },
    },
    {
      field: "title",
      headerName: "Title Blog",
      width: 200,
      renderCell: params => {
        return (
          <div
            className={
              theme === "black"
                ? "productListItem text-white"
                : "productListItem"
            }
          >
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "message",
      headerName: "Message Blog",
      width: 200,
      renderCell: params => {
        return (
          <div
            className={
              theme === "black"
                ? "productListItem text-white"
                : "productListItem"
            }
          >
            {params.row.message}
          </div>
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
          <div
            className={
              theme === "black"
                ? "containerActionsBtns text-white"
                : "containerActionsBtns"
            }
          >
            <Link to={"/blog/" + params.row._id}>
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
    <div className="productList h-[500px]">
      <button
        className="addProductList"
        onClick={() => navigate.push("/newBlog")}
      >
        Add new Blog
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
