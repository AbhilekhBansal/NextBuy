import Search from "@/pages/search";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import useBreakpoint from "./extraComponents/usebreakpoint";
import logo from "@/assets/next buy.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import useStore from "../store/store";

const user = { _id: "", role: "user" };
const Header = () => {
  const { categories, setCategories } = useStore();
  const [Category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // setLoading(true); // Start loading
        const response = await axios.get(
          "http://localhost:5000/api/v1/product/categories"
        );
        setCategories(response.data.categories);
        // console.log(Category);
      } catch (err) {
        console.log(err.message || "Something went wrong");
      } finally {
        // setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle hover state for category dropdown
  const handleMouseEnter = () => {
    setCatOpen(true); // Open the dropdown
  };

  const handleMouseLeave = () => {
    setCatOpen(false); // Close the dropdown
  };

  return (
    <nav className=" header shadow-lg border-b-2 flex p-2 h-16 relative top-0 !z-999 bg-white/80 w-full">
      <div className="header-logo flex items-center flex-1 ">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="Logo" className="logo" />
          <p className="font-bold ">Nextbuy</p>
        </Link>
      </div>
      <div className="header-menu flex items-end justify-end gap-5 p-4 ">
        {useBreakpoint() !== "s" && <SearchBar />}

        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Category</span>
          <div
            className={`absolute top-full left-0 w-max z-50 bg-white shadow-lg shadow-black  p-2 transition-opacity duration-300 ${
              catOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {categories.map((c, index) => (
              <div key={index} className="p-2 hover:text-blue-700 capitalize">
                <Link to="/search" className="!text-xs">
                  {c}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* <Link
          className="flex row"
          onClick={() => setIsOpen(false)}
          to={"/cart"}
        >
          Category
        </Link> */}
        <Link
          className="flex row"
          onClick={() => setIsOpen(false)}
          to={"/cart"}
        >
          <HiOutlineShoppingCart className=" text-lg" />
          Cart
        </Link>

        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser className="text-lg" />
            </button>

            <dialog open={isOpen}>
              <div>
                {user?.role === "admin" && (
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/admin/dashboard"}
                  >
                    Admin
                  </Link>
                )}
                <Link onClick={() => setIsOpen(false)} to={"/orders"}>
                  Orders
                </Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
