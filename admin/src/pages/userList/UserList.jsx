import React from "react";
import {DataGrid} from "@material-ui/data-grid";
//import { DeleteOutline } from "@material-ui/icons";
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import * as api from "../../api/index";
import "./userList.css";
import userImage from "../../depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
import {toast} from "react-toastify";

export default function UserList() {
  const [data, setDataUsers] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchAllUsers();
        setDataUsers(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const userDeleted = await api.deleteUserById(id);
    setDataUsers(data.filter(item => item._id !== userDeleted.data._id));
    toast.success("The user has been deleted successfully");
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
      renderCell: params => {
        return <h1>{params.row._id}</h1>;
      },
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: params => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={userImage} alt="" />
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
        return <div className="userListUser">{params.row.lastName}</div>;
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 200,
      renderCell: params => {
        return <div className="userListUser">{params.row.gender}</div>;
      },
    },
    {
      field: "phone",
      headerName: "Phone number",
      width: 200,
      renderCell: params => {
        return <div className="userListUser">{params.row.phone}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: params => {
        return <p>{params.row.email}</p>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        return (
          <div className="containerActionsBtns">
            <Link to={"/admin/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
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
    <div className="userList h-[500px]">
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

/* 
            {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
            */
