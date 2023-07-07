import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="header"
      className={`w-full  z-30 top-0 py-3 bg-opacity-100 shadow-lg border-b border-blue-700  ${
        isScrolled ? "bg-white fixed" : "bg-[#274873]"
      }`}
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-[#115D8C] pt-4 md:pt-0">
              <li>

                <Link
                  to="/"
                  className="inline-block no-underline text-blue-600 hover:text-rose font-medium text-lg py-2 px-4 lg:ml-2"
                >
                  Home
                </Link>
              </li>
              <li>

                <Link
                  to="/universites"
                  className="inline-block no-underline text-blue-600 hover:text-rose font-medium text-lg py-2 px-4 lg:ml-2"

                >
                  Universites
                </Link>
              </li>
              <li>

                <Link
                  to="/departments"
                  className="inline-block no-underline text-blue-600 hover:text-rose font-medium text-lg py-2 px-4 lg:ml-2"

                >
                  Departments
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <Link
              to="/login"
              className={`bg-blue-600 text-gray-800 w-20 p-2 rounded  mr-4 hover:bg-blue-500 hover:text-white text-center ${
                isScrolled ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Sing İn
            </Link>

            <button className="bg-[#EC1050] text-gray-200 w-20 p-2 rounded  hover:bg-blue-500 hover:text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;