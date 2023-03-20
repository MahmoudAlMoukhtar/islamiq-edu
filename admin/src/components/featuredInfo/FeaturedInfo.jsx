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
        //console.log(responseSales.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  if (error) return <h1 className="text-red-800">error</h1>;
  return (
    <div className="flex justify-between w-full mb-4 flex-wrap">
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">USERS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {loading ? (
              <GridLoader
                color={"#000"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              dataUsers.length
            )}
          </span>
        </div>
      </div>
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {loading ? (
              <GridLoader
                color={"#000"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              dataCourses.length
            )}
          </span>
        </div>
      </div>
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Blogs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {loading ? (
              <GridLoader
                color={"#000"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              dataBlogs.length
            )}
          </span>
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
/* 
<GridLoader
        color={"#000"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
*/
