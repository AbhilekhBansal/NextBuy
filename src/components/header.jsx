import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "23", role: "user" };
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
    setIsOpen(false);
  };

  return (
    <nav className="header shadow-lg border-b-2 flex p-2 h-16 ">
      <div className="header-logo flex items-center flex-1 ">
        <Link to={"/"}>
          <img src="/src/assets/next buy.png" alt="Logo" className="logo" />
        </Link>
        <p className="font-bold ">Nextbuy</p>
      </div>
      <div className="header-menu flex items-end justify-end gap-5 p-4">
        <Link onClick={() => setIsOpen(false)} to={"/"}>
          Home
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/search"}>
          <FaSearch />
        </Link>
        <Link onClick={() => setIsOpen(false)} to={"/cart"}>
          <FaShoppingBag />
        </Link>

        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
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
