import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import cover from "../../facebookcover.png";
export default function Home() {
  return (
    <div className="home w-full">
      <FeaturedInfo />
      <img src={cover} className="rounded" />
      <WidgetLg />
    </div>
  );
}

//<WidgetSm />
// <Chart
//   data={userData}
//   title="User Analytics"
//   grid
//   dataKey="Sales products"
// />
