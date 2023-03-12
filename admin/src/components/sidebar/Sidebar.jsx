import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Sidebar({theme, selectTheme}) {
  return (
    <div
      className={theme === "black" ? "sidebar bg-zinc-800" : "sidebar bg-white"}
    >
      <div
        className={
          theme === "black"
            ? "sidebarWrapper bg-zinc-800"
            : "sidebarWrapper bg-white"
        }
      >
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">Home</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">Users</li>
            </Link>
            <Link to="/blogs" className="link">
              <li className="sidebarListItem">Blogs</li>
            </Link>
            <Link to="/courses" className="link">
              <li className="sidebarListItem">Courses</li>
            </Link>
            <li className="sidebarListItem">Reports</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">Newsletter</li>
            <li className="sidebarListItem">Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* 

<LineStyle className="sidebarIcon" />
<Timeline className="sidebarIcon" />
<TrendingUp className="sidebarIcon" />
<PermIdentity className="sidebarIcon" />
<Storefront className="sidebarIcon" />
<AttachMoney className="sidebarIcon" />
<BarChart className="sidebarIcon" />
<MailOutline className="sidebarIcon" />
<DynamicFeed className="sidebarIcon" />
<ChatBubbleOutline className="sidebarIcon" />
<WorkOutline className="sidebarIcon" />
<Timeline className="sidebarIcon" />
<Report className="sidebarIcon" />
*/
