import "./productList.css";
import React from "react";
import {DataGrid} from "@material-ui/data-grid";
import {useHistory} from "react-router-dom";
export default function SectionsList({courseData, setCourseData}) {
  const navigate = useHistory();
  const handleDelete = async description => {
    const courseSections = courseData.sections.filter(
      s => s.description !== description
    );
    setCourseData({
      ...courseData,
      sections: courseSections,
    });
    if (courseSections.length === 0) {
      navigate.push("/newproduct");
    }
  };

  const columns = [
    {field: "_id", headerName: "ID", width: 150},

    {
      field: "description",
      headerName: "description",
      width: 200,
      renderCell: params => {
        return <p>{params.row.description}</p>;
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
              onClick={() => handleDelete(params.row.description)}
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
      <h2 className="text-3xl font-bold">SECTIONS LIST</h2>
      <DataGrid
        rows={courseData.sections}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row.description}
      />
    </div>
  );
}