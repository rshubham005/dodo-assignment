import React from "react";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import { PiRocketLaunch } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { PiInvoice } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { CiBarcode } from "react-icons/ci";
import { AiOutlineIdcard } from "react-icons/ai";
import { PiBasket } from "react-icons/pi";
import { PiNotebookDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiFileDocDuotone } from "react-icons/pi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="sidebar_box">
        <div className="logo_box">
          <img src={name} alt="Head Name" />
        </div>
        <div>
          {" "}
          <div className="title_top">
            <p className="active_title">Favorites</p>
            <p className="deactive_title">Recently</p>
          </div>
          <div className="title_body">
            <ul className="list">
              <li>Get Started</li>
              <li>Transactions</li>
            </ul>
          </div>
        </div>

        <div className="menu1">
          <div className="title">
            <p className="active_title">Pages</p>
          </div>
          <div className="title_body">
            <Link className="menu_icon_item" to="/">
              <PiRocketLaunch className="icon" />
              <p>Overview</p>
            </Link>
            <Link className="menu_icon_item" to="/transactions">
              <CiDollar className="icon" />
              <p>Transactions</p>
            </Link>
            <Link className="menu_icon_item" to="/extra">
              <PiInvoice className="icon" />
              <p>Invoices</p>
            </Link>
            <Link className="menu_icon_item" to="/extra">
              <IoPeopleSharp className="icon" />
              <p>Customers</p>
            </Link>{" "}
            <Link className="menu_icon_item" to="/extra">
              <CiBarcode className="icon" /> <p>Product Catalog</p>
            </Link>{" "}
            <Link className="menu_icon_item" to="/extra">
              <AiOutlineIdcard className="icon" /> <p>Reports</p>
            </Link>{" "}
            <Link className="menu_icon_item" to="/extra">
              <PiBasket className="icon" />
              <p>Checkout</p>
            </Link>{" "}
            <Link className="menu_icon_item" to="/extra">
              <PiNotebookDuotone className="icon" /> <p>Business Account</p>
            </Link>{" "}
            <Link className="menu_icon_item" to="/user-setting">
              <IoSettingsOutline className="icon" /> <p>Developer Tools</p>
            </Link>
          </div>{" "}
        </div>
        <div className="menu2">
          <div className="title">
            <p className="active_title">Pages</p>
          </div>
          <Link className="menu_icon_item" to="/extra">
            <PiFileDocDuotone className="icon" />
            <p>Documentation</p>
          </Link>
          <Link className="menu_icon_item" to="/extra">
            <MdOutlineHeadsetMic className="icon" /> <p>Help Center</p>
          </Link>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo of DODO" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
