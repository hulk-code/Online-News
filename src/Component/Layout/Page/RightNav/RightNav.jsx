import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import q1 from "../../../../assets/qZone1.png";
import q2 from "../../../../assets/qZone2.png";
import q3 from "../../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider/AuthProvider";

const RightNav = () => {
  const { GoogleLogin } = useContext(AuthContext);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    GoogleLogin()
      .then((user) => {
        console.log("User logged in:", user);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };
  return (
    <div className=" ">
      <h1 className="font-poppins font-bold text-lg mb-3 ">Login With</h1>
      <div>
        <form onSubmit={handleGoogleLogin}>
          <button className="btn w-full mt-2">
            <FaGoogle className="space-x-2"></FaGoogle>
            Login With Google
          </button>
        </form>
        <button className="btn w-full mt-2">
          <FaGithub className="space-x-2"></FaGithub>
          Login With GitHub
        </button>
      </div>
      <div>
        <h1 className="font-poppins font-bold text-lg mt-3 mb-3 ">
          Find Us On
        </h1>
        <div className="divide-y divide-slate-700 ...">
          <a className="flex items-center gap-2 m-3 p-2 ">
            <FaFacebook></FaFacebook>
            <span className=" font-poppins font-thin"> Facebook</span>
          </a>
          <a className="flex items-center gap-2 m-3 p-2 ">
            <FaTwitter></FaTwitter>
            <span className=" font-poppins font-thin"> Twitter</span>
          </a>
          <a className="flex items-center gap-2 m-3 p-2 ">
            <FaInstagram></FaInstagram>
            <span className=" font-poppins font-thin"> Instagram</span>
          </a>
        </div>
      </div>
      <div className="bg-slate-200 p-3">
        <h1 className="font-poppins font-bold text-lg mb-3 ">Q-Zone</h1>
        <img className="w-full mx-auto" src={q1} alt="" />
        <img className="w-full mx-auto" src={q2} alt="" />
        <img className="w-full mx-auto" src={q3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
