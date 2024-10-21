import { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        const redirectPath = location.state?.from?.pathname || '/';
        navigate(redirectPath);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-gradient-to-b from-rose-400 to-rose-700 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div className="card bg-white w-full max-w-sm shadow-2xl p-6">
          <div className="text-4xl font-semibold text-center mb-6 text-rose-400">
            Zone
          </div>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered bg-white"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-rose-500 text-white w-full">
                Login
              </button>
            </div>
          </form>
          <NavLink
            to="/registration"
            className="text-purple-700 font-semibold text-xl text-center block mt-4"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
