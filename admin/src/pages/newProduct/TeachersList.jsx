import "./productList.css";
import React from "react";
import {DataGrid} from "@material-ui/data-grid";
import {useHistory} from "react-router-dom";
export default function TeacherList({courseData, setCourseData}) {
  const navigate = useHistory();
  const handleDelete = async bio => {
    const courseTeachers = courseData.teachers.filter(s => s.bio !== bio);
    setCourseData({
      ...courseData,
      teachers: courseTeachers,
    });
    if (courseTeachers.length === 0) {
      navigate.push("/newproduct");
    }
  };

  const columns = [
    {field: "_id", headerName: "ID", width: 150},

    {
      field: "name",
      headerName: "Name Teacher",
      width: 200,
      renderCell: params => {
        return <p>{params.row.name}</p>;
      },
    },
    {
      field: "bio",
      headerName: "Bio Teacher",
      width: 200,
      renderCell: params => {
        return <p>{params.row.bio}</p>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        return (
          <div className="containerActionsBtns w-full">
            <button
              className="productListDelete w-full"
              onClick={() => handleDelete(params.row.bio)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-screen">
      <h2 className="text-3xl font-bold">TEACHERS LIST</h2>
      <DataGrid
        rows={courseData.teachers}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row.bio}
      />
    </div>
  );
}
