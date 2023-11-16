import "../App.css";
import { Link, useLocation } from "react-router-dom";

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
            src="https://picsum.photos/120/80?random=1"
            className="my-3 ml-6 mini:ml-16"
          />
        </div>
        <div className="options gap-6 text-text wb:flex hidden">
          <Link to="/developers" className={isActive("/developers")}>
            Developers
          </Link>
          <Link to="/ecosystem" className={isActive("/ecosystem")}>
            Ecosystem
          </Link>
          <Link to="/community" className={isActive("/community")}>
            Community
          </Link>
          <Link to="/dapps" className={isActive("/dapps")}>
            DApps
          </Link>
          <Link to="/roadmap" className={isActive("/roadmap")}>
            Roadmap
          </Link>
          <Link to="/resources" className={isActive("/resources")}>
            Resource
          </Link>
          <Link to="/test" className={isActive("/test")}>
            Test
          </Link>
        </div>
        <div className="hamburger wb:hidden flex text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-6 mini:mr-12"
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
            className="getstartedbtn cursor-pointer mr-16 items-center justify-center  bg-primary text-text w-32 h-10 wb:flex hidden"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}
