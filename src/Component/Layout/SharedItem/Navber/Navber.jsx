import { Link, NavLink } from "react-router-dom"; 
import avatar from '../../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthProvider/AuthProvider";


const Navber = () => {
  const{user ,logOutUser}=useContext(AuthContext)
  const handleLogOut=()=>{
     logOutUser()
     .then(result =>{
      console.log(result)
     })
     .catch(error =>{
      console.log(error.code);
     })
  }
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black">
   
      <ul className="flex flex-1 justify-center space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                : "hover:text-blue-400"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                : "hover:text-blue-400"
            }
          >
            Services
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        {
          user?
          <button onClick={handleLogOut} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Logout
         </button>:
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link to='/login'>Login</Link>
         </button>

        }
       
      </div>
    </nav>
  );
};

export default Navber;
