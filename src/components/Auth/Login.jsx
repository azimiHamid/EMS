/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../../assets/logo.png";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-white">
      {/* Left Side - Login Form */}
      <section className="lg:w-1/2 h-screen flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-auto w-[50%]" />
          </div>
          <h2 className="text-3xl font-semibold text-center mb-4">
            Login to Your Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Login using social networks
          </p>

          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-blue-600 text-white p-3 rounded-full h-[50px] w-[50px]">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="bg-red-500 text-white p-3 rounded-full h-[50px] w-[50px]">
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-blue-700 text-white p-3 rounded-full h-[50px] w-[50px]">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="relative mb-6">
            <hr className="border-gray-300" />
            <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-white px-3 text-gray-500">
              OR
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>

      {/* Right Side - Signup Section */}
      <section className="hidden lg:flex lg:w-1/2 bg-gradient-to-r from-teal-400 to-green-400 justify-center items-center p-8">
        <div className="text-center">
          <h2 className="text-white text-3xl font-semibold mb-4">New Here?</h2>
          <p className="text-white text-lg mb-6">
            Sign up and discover a great amount of new opportunities!
          </p>
          <button className="bg-white text-teal-500 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
