// import { Button } from "./ui/Button";
import img from "../assets/Frame 1618871078.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" relative top-5 max-w-[1200px] m-auto mx-4 md:mx-auto">
      <nav className="flex items-center justify-between px-3 py-2 bg-lightgreen border-2 border-lightblue rounded-2xl text-white  ">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/Events">
            <img src={img} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:hidden md:flex space-x-6 text-white font-Jeju">
          <Link to="/Events">
            <a className="text-white">Events</a>
          </Link>
          <Link to="/Tickets">
            <a className="hover:text-white">My Tickets</a>
          </Link>
          <Link to="/About">
            <a className="hover:text-white">About Project</a>
          </Link>
        </div>

        {/* CTA Button (Always Visible) */}
        <Link to="/Tickets">
          <Button:button className="bg-white text-dark px-3 py-2 rounded-lg font-Jeju shadow-md">
            MY TICKETS →
          </Button:button>
        </Link>
      </nav>
    </div>
  );
}
