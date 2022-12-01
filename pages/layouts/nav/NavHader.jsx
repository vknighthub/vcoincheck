import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/// React router dom

/// images
import logo from "/public/images/logo128.svg";
import logoSmall from "/public/images/logo192.png";

const NavHader = () => {
   const [toggle, setToggle] = useState(false);
   return (
      <div className="nav-header">
         <Link href={"/"} className="brand-logo">
            {toggle
               ?
               <Image className="logo-abbr img-fluid" src={logoSmall} alt="" width={40} />
               :
               <Image className="logo-abbr img-fluid" src={logo} alt="" width={40} />}
         </Link>
         <div className="nav-control" onClick={() => setToggle(!toggle)} >
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
