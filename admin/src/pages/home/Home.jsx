import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import cover from "../../facebookcover.png";
export default function Home() {
  return (
    <div className="home w-full">
      <FeaturedInfo />
      <img src={cover} className="rounded mx-[0px] w-full" alt="" />
      <WidgetLg />
    </div>
  );
}
