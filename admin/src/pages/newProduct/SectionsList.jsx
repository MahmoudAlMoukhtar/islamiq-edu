import "./productList.css";
import React from "react";
import {DataGrid} from "@material-ui/data-grid";
import {useHistory} from "react-router-dom";
import * as api from "../../api/index";
import {toast} from "react-toastify";
export default function SectionsList({courseData, setCourseData}) {
  const navigate = useHistory();
  const handleDelete = async (idCourse, idSection) => {
    await api.deleteSection(idCourse, idSection);
    toast.success("Deleted Section successfully!");
    const sectionsAfterDelete = courseData.sections.filter(
      item => item._id !== idSection
    );
    setCourseData({...courseData, sections: sectionsAfterDelete});
    if (sectionsAfterDelete.length === 0) {
      navigate.push("/courses");
    }
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
              onClick={() => handleDelete(courseData._id, params.row._id)}
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
        getRowId={row => row._id}
      />
    </div>
  );
}
