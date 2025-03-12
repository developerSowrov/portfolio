import React from "react";
import img from "../../assets/formal.jpg";
const Navbar = () => {
  return (
    <div className="">
      <div className="navbar text-black   w-11/12 mx-auto  fixed backdrop-blur-xl z-100 bg-[#ECF0F3]/60% lg:ml-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="font-mono text-base hover:text-[#ff001e]">Home</a>
              </li>
              <li>
                <a className="font-mono text-base hover:text-[#ff001e]">
                  Projects
                </a>
              </li>
              <li>
                <a className="font-mono text-base hover:text-[#ff001e]">Me</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={img}
              className="w-[70px] rounded-full h-[70px] object-cover border-2 border-gray-500"
              alt=""
            />
            <p className="font-bold text-xl text-gray-800 font-serif ">
              SOWROV
            </p>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-mono text-base hover:text-[#ff001e]">Home</a>
            </li>
            <li>
              <a className="font-mono text-base hover:text-[#ff001e]">
                Projects
              </a>
            </li>
            <li>
              <a className="font-mono text-base hover:text-[#ff001e]">Me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="px-6 py-3 hvr-grow-rotate shadow  text-[#ff001e] bg-[#ECF0F3] border-2 border-[#ff001e] font-bold rounded-lg custom-hover hover:text-white hover:bg-[#ff0051]">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
