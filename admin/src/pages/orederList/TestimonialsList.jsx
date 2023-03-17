import "./orderList.css";
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";
import {toast, ToastContainer} from "react-toastify";

export default function TestimonialsList() {
  const [data, setDataTestimonials] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await api.fetchAllTestimonials();
        setDataTestimonials(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const res = await api.deleteTestimonialById(id);
    setDataTestimonials(data.filter(item => item.id !== res.data._id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {field: "_id", headerName: "ID", width: 90},
    {
      field: "firstName",
      headerName: "First Name User",
      width: 200,
      renderCell: params => {
        return <div className="orderListItem">{params.row.firstName}</div>;
      },
    },
    {
      field: "lastName",
      headerName: "Last Name User",
      width: 200,
      renderCell: params => {
        return <div className="orderListItem">{params.row.lastName}</div>;
      },
    },
    {
      field: "message",
      headerName: "Message",
      width: 600,
      height: 600,
      renderCell: params => {
        return <div className="orderListItem">{params.row.message}</div>;
      },
    },
    {
      field: "display",
      headerName: "Display On Website",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: params => {
        //console.log(params.row);
        return (
          <div className="containerActionsBtns">
            <Link to={"/testimonials/" + params.row._id}>
              <button className="orderListDiplay">Display</button>
            </Link>
            <button>
              <button
                className="orderListEdit"
                onClick={() => {
                  const res = api.updateTestimonial(params.row._id, {
                    display: true,
                  });
                  toast.success(
                    "This Testimonial Is Display On Main Website In Success"
                  );
                }}
              >
                Accept
              </button>
            </button>
            <button>
              <button
                className="orderListReject"
                onClick={() => {
                  const res = api.updateTestimonial(params.row._id, {
                    display: false,
                  });
                  toast.success(
                    "This Testimonial Is Un Display On Main Website In Success"
                  );
                }}
              >
                Reject
              </button>
            </button>
            <button
              className="orderListDelete"
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
    <div className="orderList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
      <ToastContainer />
    </div>
  );
}
/* 
   <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
*/
