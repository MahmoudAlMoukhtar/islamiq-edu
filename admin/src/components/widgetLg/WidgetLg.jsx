import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import * as api from "../../api/index";
import "./widgetLg.css";

export default function WidgetLg() {
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
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading)
    return (
      <GridLoader
        color={"#0000"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Users</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Gender</th>
          <th className="widgetLgTh">Phone</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Action</th>
        </tr>

        {data.map(u => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="user"
                className="widgetLgImg"
              />
              <span className="widgetLgName">{u.firstName}</span>
            </td>
            <td className="widgetLgDate">{u.gender}</td>
            <td className="widgetLgAmount">{u.phone}</td>
            <td className="widgetLgAmount">{u.email}</td>
            <td className="widgetLgStatus">
              <Link
                to={`/users/${u._id}`}
                className="bg-orange-100 rounded p-2"
              >
                Display
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
