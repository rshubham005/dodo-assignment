import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { ImCommand } from "react-icons/im";
import { FiSun } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import { PiNotebookDuotone } from "react-icons/pi";
function Header() {
  return (
    <div>
      <div className="header_block">
        <div className="section1">
          {" "}
          <p>
            <MdOutlineRocketLaunch className="icon" />
          </p>
          <p>
            <CiStar className="icon" />
          </p>
          <div className="breadcrumb">
            <p className="active_title">Pages </p>
            <p className="active_title"> / </p>
            <p className="bc_title"> Overview</p>
          </div>
        </div>
        <div className="section2">
          <div className="search_box">
            <CiSearch className="icon" />
            <input type="text" placeholder="Search" />
            <ImCommand className="icon" />
          </div>
          <FiSun className="icon" />
          <GiBackwardTime className="icon" />
          <GoBell className="icon" /> 
          <PiNotebookDuotone className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
