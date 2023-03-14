import {useEffect, useState} from "react";
import * as api from "../../api/index";
import {useHistory} from "react-router-dom";
import "./featuredInfo.css";
import GridLoader from "react-spinners/GridLoader";
//import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  const [dataUsers, setDataUsers] = useState();
  const [dataBlogs, setDataBlogs] = useState();
  const [dataCourses, setDataCourses] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseUser = await api.fetchAllUsers();
        setDataUsers(responseUser.data);
        const responseOrders = await api.fetchPosts();
        setDataBlogs(responseOrders.data);
        const responseSales = await api.fetchCourses();
        setDataCourses(responseSales.data);
        console.log(responseSales.data);
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
  return (
    <div className="featured mb-4">
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">USERS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataUsers.length}</span>
        </div>
      </div>
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataCourses.length}</span>
        </div>
      </div>

      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Blogs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataBlogs.length}</span>
        </div>
      </div>
    </div>
  );
}
/* 
<ArrowUpward className="featuredIcon" />
<ArrowDownward className="featuredIcon negative" />
<ArrowDownward className="featuredIcon negative" />
*/

/* 
<div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">+2.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
*/
/* 

<div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

*/
