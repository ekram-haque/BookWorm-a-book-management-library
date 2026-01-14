import React from "react";
import { Link, Outlet } from "react-router";

import authimg from "../assets/bookworm-banner-removebg-preview.png";


const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="bg-primary my-2  py-3 px-2 rounded-lg ml-5 md:mr-[85%]">
        <Link to={'/'}>BookWorm</Link>
      </div>

      <div className="md:flex  justify-around items-center">
        <Outlet />
        <img  src={authimg}
          alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
