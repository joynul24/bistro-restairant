import { Link, NavLink } from "react-router-dom";
import  "./Navber.css"
import profile from "../../../assets/others/profile.png"

const Navbar = () => {

    const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='contactUs'>Contact Us</NavLink></li>
      <li><NavLink to='menu'>our menu</NavLink></li>
      <li><NavLink to='order/salad'>Order Food</NavLink></li>
    </>

  return (
    <div className="navbar fixed z-10 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
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
            className="font-i menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow uppercase"
          >
           {links}
          </ul>
        </div>
        <div className="flex text-white flex-col">
        <h3 className="font-c uppercase md:text-2xl font-semibold md:font-bold">bistro boss</h3>
         <p className="uppercase md:font-semibold [letter-spacing:5px]">restairant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-white font-i uppercase menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2 uppercase">
          <Link to='login'>
          <p className="text-white font-bold">Sign in</p>
          </Link>
          <img className="w-[44px] rounded-full" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
