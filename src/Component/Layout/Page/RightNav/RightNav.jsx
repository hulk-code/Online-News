import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightNav = () => {
  return (
    <div className=" ">
      <h1 className="font-poppins font-bold text-lg mb-3 ">Login With</h1>
      <div>
        <button className="btn w-full mt-2">
         <FaGoogle className="space-x-2"></FaGoogle>
         Login With Google
        </button>
        <button className="btn w-full mt-2">
         <FaGithub className="space-x-2"></FaGithub>
         Login With GitHub
        </button>
      </div>
      <div>
        <h1 className="font-poppins font-bold text-lg mt-3 mb-3 ">Find Us On</h1>
        <div className="divide-y divide-slate-700 ...">
        <a className="flex items-center gap-2 m-3 p-2 ">
            <FaFacebook></FaFacebook>
          <span className=" font-poppins font-thin">  Facebook</span>
        </a> 
        <a className="flex items-center gap-2 m-3 p-2 ">
            <FaTwitter></FaTwitter>
          <span className=" font-poppins font-thin">  Twitter</span>
        </a> 
        <a className="flex items-center gap-2 m-3 p-2 ">
            <FaInstagram></FaInstagram>
          <span className=" font-poppins font-thin">  Instagram</span>
        </a> 
       
        </div>
        
      </div>
    </div>
  );
};

export default RightNav;
