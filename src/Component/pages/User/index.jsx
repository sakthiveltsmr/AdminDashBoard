import "./user.css";
import Me from "../../../img/PRO.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="usertitlecontainer">
        <h1 className="usertitle">Edit User</h1>
        <Link to="/newuser">
          <button className="useraddbutton">Create</button>
        </Link>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowtop">
            <img src={Me} alt="Me" className="usershowimg" />
            <div className="usershowtoptitle">
              <span className="usershowusername">Sakthivel</span>
              <span className="usershowusertitle">Web Developer </span>
            </div>
          </div>
          <div className="usershowbottom">
            <span className="usershowtitle">Account Details</span>
            <div className="usershowinfo">
              <PermIdentity className="usershowicon" />
              <span className="usershowinfotitle">sakthiveltsmr</span>
            </div>
            <div className="usershowinfo">
              <CalendarToday className=" " />
              <span className="usershowinfotitle">10.06.1998</span>
            </div>
            <span className="usershowtitle">Contact Details</span>
            <div className="usershowinfo">
              <PhoneAndroid className="usershowicon" />
              <span className="usershowinfotitle">+91 9444113241</span>
            </div>
            <div className="usershowinfo">
              <MailOutline className="usershowicon" />
              <span className="usershowinfotitle">sakthiveltsmr@gmail.com</span>
            </div>
            <div className="usershowinfo">
              <LocationSearching className="usershowicon" />
              <span className="usershowinfotitle">Namakkal/TamilNadu</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="userupdatetitle">Edit</span>
          <form className="userupdateform">
            <div className="userupdateleft">
              <div className="userupdateitem">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="sakthiveltsmr"
                  className="userupdateinput"
                />
              </div>
              <div className="userupdateitem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="sakthivel"
                  className="userupdateinput"
                />
              </div>
              <div className="userupdateitem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="sakthiveltsmr@gmail.com"
                  className="userupdateinput"
                />
              </div>
              <div className="userupdateitem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 122 11 33"
                  className="userupdateinput"
                />
              </div>
              <div className="userupdateitem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Namakkal/Tamilnadu"
                  className="userupdateinput"
                />
              </div>
            </div>
            <div className="userupdateright">
              <div className="userupdateupload">
                <img src={Me} alt="me" className="userupdateimg" />
                <label htmlFor="file">
                  <Publish className="userupdateicon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userupdatebutton">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
