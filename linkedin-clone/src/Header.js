import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>

        {/* search bar */}
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={
            "https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/66520453_2927652673927940_4096066888075837440_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=n6-EH1WLLfMAX_uUHc0&_nc_ht=scontent.fsof3-1.fna&oh=096e72a0cbcbdeedf96af59119ad24ef&oe=600C4976"
          }
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
