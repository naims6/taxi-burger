import React from "react";
import logo from "../assets/assets/logo.png";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] mb-1">
      <img className="w-full max-w-[400px] -translate-y-12" src={logo} alt="" />
      <p className="mt-3 w-16 h-16 rounded-full bg-amber-300 flex items-center justify-center animate-bounce shadow">
        <i className="fa-solid fa-arrow-down text-xl"></i>
      </p>
      <h1 className="font-mooli mt-5 bg-amber-300 text-center p-4 w-full font-semibold text-xl">
        Digital Menu Card For Our Lovely Customer
      </h1>
    </div>
  );
};

export default Home;
