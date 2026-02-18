import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Nav() {
  const [active, setactive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-around text-white mt-10">
        <Link
          to="/"
          onClick={() => setactive("/")}
          className={`font-bold text-orange-500 transition-all duration-500 text-2xl hover:scale-110`}
        >
          <strong>Film</strong> <strong className="text-white">Galaxy</strong>
        </Link>
        <div className="hidden md:flex space-x-7">
          <Link
            to="/"
            onClick={() => setactive("/")}
            className={`hover:text-orange-500 text-lg transition-all duration-300 h-fit ${
              active === "/" ? "border-b-2 pb-1 border-orange-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/Favorite-List"
            onClick={() => setactive("/Favorite-List")}
            className={`hover:text-orange-500 text-lg transition-all duration-500 h-fit ${
              active === "/Favorite-List"
                ? "border-b-2 pb-1 border-orange-500"
                : ""
            }`}
          >
            Favorite List
          </Link>
          <SearchBar />
        </div>
        <div
          className="md:hidden cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-[25px] h-[3px] bg-white"></div>
          <div className="w-[15px] h-[3px] bg-white my-1"></div>
          <div className="w-[20px] h-[3px] bg-white"></div>
        </div>
      </div>
      {menuOpen ? (
        <div className="md:hidden flex flex-col items-center space-y-5 text-white mt-10">
          <Link
            to="/"
            onClick={() => {
              setactive("/");
              setMenuOpen(false);
            }}
            className={`hover:text-orange-500 text-lg transition-all duration-300 py-1 ${
              active === "/" ? "border-b-2 border-orange-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/Favorite-List"
            onClick={() => {
              setactive("/Favorite-List");
              setMenuOpen(false);
            }}
            className={`hover:text-orange-500 text-lg transition-all duration-300 py-1 ${
              active === "/Favorite-List" ? "border-b-2 border-orange-500" : ""
            }`}
          >
            Favorite List
          </Link>
          <SearchBar />
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Nav;
