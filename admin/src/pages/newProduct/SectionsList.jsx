import "./productList.css";
import React from "react";
import {DataGrid} from "@material-ui/data-grid";
import {useHistory} from "react-router-dom";
export default function SectionsList({courseData, setCourseData}) {
  //console.log(courseData.sections);
  const navigate = useHistory();
  const handleDelete = async uuid => {
    const courseSections = courseData.sections.filter(s => s.uuid !== uuid);
    setCourseData({
      ...courseData,
      sections: courseSections,
    });
  };

  const columns = [
    {field: "uuid", headerName: "ID", width: 150},

    {
      field: "description",
      headerName: "description",
      width: 200,
      renderCell: params => {
        return <p>{params.row.description}</p>;
      },
    },
    {
      field: "descriptionAr",
      headerName: "وصف القسم باللغة العربية",
      width: 200,
      renderCell: params => {
        return <p>{params.row.descriptionAr}</p>;
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
              onClick={() => handleDelete(params.row.uuid)}
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
        getRowId={row => row.uuid}
      />
    </div>
  );
}
