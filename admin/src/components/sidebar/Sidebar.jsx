import "./sidebar.css";
import {Link, NavLink} from "react-router-dom";

export default function Sidebar({theme, selectTheme}) {
  return (
    <div className={theme === "black" ? " bg-zinc-800 w-60" : " bg-white w-60"}>
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
            <NavLink to="/" className="link">
              <li className="sidebarListItem active">Home</li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/users" className="link">
              <li className="sidebarListItem">Users</li>
            </NavLink>
            <NavLink to="/blogs" className="link">
              <li className="sidebarListItem">Blogs</li>
            </NavLink>
            <NavLink to="/courses" className="link">
              <li className="sidebarListItem">Courses</li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">Newsletter</li>

            <NavLink to="/testimonials" className="link">
              <li className="sidebarListItem">Testimonials</li>
            </NavLink>
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
