import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebrmenu">
          <h1 className="sidebartitle">Dashboard</h1>
          <ul className="sidebarlist">
            <li className="sidebarlistitem active">
              <LineStyle className="sidebaricons" />
              Home
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricons" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebaricons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebrmenu">
          <h1 className="sidebartitle">Quick Menu</h1>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <PermIdentity className="sidebaricons" />
              Users
            </li>
            <li className="sidebarlistitem">
              <Storefront className="sidebaricons" />
              Products
            </li>
            <li className="sidebarlistitem">
              <AttachMoney className="sidebaricons" />
              Transactions
            </li>
            <li className="sidebarlistitem">
              <BarChart className="sidebaricons" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebrmenu">
          <h1 className="sidebartitle">Notifications</h1>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <MailOutline className="sidebaricons" />
              Mail
            </li>
            <li className="sidebarlistitem">
              <DynamicFeed className="sidebaricons" />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <ChatBubbleOutline className="sidebaricons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebrmenu">
          <h1 className="sidebartitle">Staff</h1>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <WorkOutline className="sidebaricons" />
              Manage
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricons" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <Report className="sidebaricons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
