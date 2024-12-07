import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider/AuthProvider";


const Register = () => {
    const{signInUser}=useContext(AuthContext)
    const  submiteForm = e =>{
        
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,email,password);

        signInUser(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
           
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
          
          });
    }
    return (
        <div>
            <div>
      <div className="hero  ">
        <div className="hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm  ">
            <form onSubmit={submiteForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="text"
                  placeholder="ENTER YOUR NAME"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             
            </form>
            Already Registerd Please
      <Link to="/login">
        <span className="text-red-500 font-poppins font-bold">Login</span>
      </Link>
          </div>
          
        </div>
      </div>
      
    </div>
        </div>
    );
};

export default Register;