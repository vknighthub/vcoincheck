import React, { useState } from "react";
import NavHader from "./NavHader";
import SideBar from "./SideBar";

const JobieNav = ({ title, onClick: ClickToAddEvent, onClick2, onClick3 }) => {
   const [toggle, setToggle] = useState("");
   const onClick = (name) => setToggle(toggle === name ? "" : name);
   return (
      <>
         <NavHader />
         <SideBar onClick={() => onClick2()} onClick3={() => onClick3()} />
         {/* 
         <Header
            onNote={() => onClick("chatbox")}
            onNotification={() => onClick("notification")}
            onProfile={() => onClick("profile")}
            toggle={toggle}
            title={title}
            onBox={() => onClick("box")}
            onClick={() => ClickToAddEvent()}
         /> */}

      </>
   );
};

export default JobieNav;
