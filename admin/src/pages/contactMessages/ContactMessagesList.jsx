import "./coursesList.css";
import {DataGrid} from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";
export default function ContactMessagesList() {
  const [data, setDataContactMessages] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseContactMessages = await api.fetchContactMessages();
        setDataContactMessages(responseContactMessages.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);
  const handleDelete = async id => {
    const res = await api.deleteContactMessagesById(id);
    setDataContactMessages(data.filter(item => item._id !== res.data._id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {field: "_id", headerName: "ID", width: 150},
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.firstName}</div>;
      },
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.lastName}</div>;
      },
    },
    {
      field: "message",
      headerName: "Comment Message",
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.message}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email Sender",
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.email}</div>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: params => {
        return (
          <div className="containerActionsBtns">
            <Link to={"/admin/contactMessage/" + params.row._id}>
              <button className="productListEdit">Show Details</button>
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
