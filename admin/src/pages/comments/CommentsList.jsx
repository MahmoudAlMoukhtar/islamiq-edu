import "./coursesList.css";
import {DataGrid} from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";
export default function CommentsList({theme}) {
  const [data, setDataComments] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseComments = await api.fetchComments();
        setDataComments(responseComments.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const res = await api.deleteCommentById(id);
    setDataComments(data.filter(item => item._id !== id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {field: "_id", headerName: "ID", width: 150},

    {
      field: "idUser",
      headerName: "Id User",
      width: 200,
    },
    {
      field: "idParent",
      headerName: "Id Blog Parent Comment",
      width: 200,
      renderCell: params => {
        return (
          <div
            className={
              theme === "black"
                ? "productListItem text-white"
                : "productListItem "
            }
          >
            {params.row.idParent}
          </div>
        );
      },
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      renderCell: params => {
        return (
          <div
            className={
              theme === "black"
                ? "productListItem text-white"
                : "productListItem "
            }
          >
            {params.row.firstName}
          </div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 200,
      renderCell: params => {
        return (
          <div
            className={
              theme === "black"
                ? "productListItem text-white"
                : "productListItem "
            }
          >
            {params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "message",
      headerName: "Comment Message",

      width: 200,
      renderCell: params => {
        return (
          <div
            className={
              theme === "black"
                ? "productListItem text-white"
                : "productListItem "
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
        return (
          <div
            className={
              theme === "black"
                ? "containerActionsBtns text-white"
                : "containerActionsBtns"
            }
          >
            <Link to={"/comments/" + params.row._id}>
              <button className="productListEdit">Show Details</button>
            </Link>
            <button
              className="productListDelete"
              onClick={() => {
                //console.log(params.row._id);
                handleDelete(params.row._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div
      className={
        theme === "black"
          ? "productList h-[500px] text-white"
          : "productList h-[500px] "
      }
    >
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
