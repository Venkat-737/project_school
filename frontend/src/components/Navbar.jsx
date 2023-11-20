import "../App.css";
import { Link, useLocation } from "react-router-dom";
import skillSyncLogoCropped from "../assets/skillsynclogocropped.jpeg";

export default function Navbar() {
  const loc = useLocation();
  const isActive = (path) => {
    return loc.pathname === path ? "text-primary" : "text-text";
  };
  return (
    <>
      <nav className="justify-between bg-background font-poppins flex flex-row items-center  ${isActive('/')} ">
        <div className="logo">
          <img
            src={skillSyncLogoCropped}
            style={{ width: "80px", height: "50px" }}
            className="my-3 ml-6 mini:ml-8 object-scale-down"
          />
        </div>
        <div className="options gap-6 text-text wb:flex hidden">
          <Link
            to="/developers"
            className={`${isActive(
              "/developers"
            )} hover:text-primary transition`}
          >
            Developers
          </Link>
          <Link
            to="/ecosystem"
            className={`${isActive(
              "/ecosystem"
            )} hover:text-primary transition`}
          >
            Ecosystem
          </Link>
          <Link
            to="/community"
            className={`${isActive(
              "/community"
            )}  hover:text-primary transition`}
            hover
          >
            Community
          </Link>
          <Link
            to="/dapps"
            className={`${isActive("/dapps")}  hover:text-primary transition`}
          >
            DApps
          </Link>
          <Link
            to="/roadmap"
            className={`${isActive("/roadmap")}  hover:text-primary transition`}
          >
            Roadmap
          </Link>
          <Link
            to="/resources"
            className={`${isActive(
              "/resources"
            )} hover:text-primary transition`}
          >
            Resource
          </Link>
          <Link
            to="/test"
            className={`${isActive("/test")}  hover:text-primary transition`}
          >
            Test
          </Link>
        </div>
        <div className="hamburger wb:hidden flex text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-6 "
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 17h18M3 12h18M3 7h18"
            />
          </svg>
        </div>
        <div className="getstarted hidden wb:flex">
          <Link
            to="/pages"
            className="getstartedbtn  cursor-pointer mr-8 items-center justify-center  bg-primary text-text w-32 h-10 wb:flex hidden"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}
