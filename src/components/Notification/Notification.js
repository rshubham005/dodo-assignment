import React from "react";
import { RiBugLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineWechatWork } from "react-icons/ai";
import icon1 from "../../assets/IconSet.png";
import icon2 from "../../assets/IconSet1.png";
import icon3 from "../../assets/IconSet2.png";
import icon4 from "../../assets/IconSet3.png";
import icon5 from "../../assets/IconSet4.png";

function Notification() {
  return (
    <div>
      <div className="notification_panel">
        <p className="noti_heading">Notification</p>
        <div className="noti_box">
          <div className="icon_box">
            <RiBugLine className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">You have an issue that ...</p>
            <p className="noti_time">Just Now</p>
          </div>
        </div>
        <div className="noti_box">
          <div className="icon_box">
            <AiOutlineUser className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">New team member joined</p>
            <p className="noti_time">59 minutes ago</p>
          </div>
        </div>{" "}
        <div className="noti_box">
          <div className="icon_box">
            <AiOutlineWechatWork className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">New product feature av...</p>
            <p className="noti_time">12 hours ago</p>
          </div>
        </div>{" "}
        <div className="noti_box">
          <div className="icon_box">
            <RiBugLine className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">Andi Lane subscribed to you</p>
            <p className="noti_time">Today, 11:59 AM</p>
          </div>
        </div>
        <p className="noti_heading">Activities</p>
        <div className="noti_box">
          <div className="icon_box">
            <img src={icon1} alt="activity icon" className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">You have an issue that ...</p>
            <p className="noti_time">Just Now</p>
          </div>
        </div>
        <div className="noti_box">
          <div className="icon_box">
            <img src={icon2} alt="activity icon" className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">New team member joined</p>
            <p className="noti_time">59 minutes ago</p>
          </div>
        </div>{" "}
        <div className="noti_box">
          <div className="icon_box">
            <img src={icon3} alt="activity icon" className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">New product feature av...</p>
            <p className="noti_time">12 hours ago</p>
          </div>
        </div>{" "}
        <div className="noti_box">
          <div className="icon_box">
            <img src={icon4} alt="activity icon" className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">Andi Lane subscribed to you</p>
            <p className="noti_time">Today, 11:59 AM</p>
          </div>
        </div>
        <div className="noti_box">
          <div className="icon_box">
            <img src={icon5} alt="activity icon" className="noti_icon" />
          </div>
          <div className="text_box">
            <p className="noti_text">Andi Lane subscribed to you</p>
            <p className="noti_time">Feb 2, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
