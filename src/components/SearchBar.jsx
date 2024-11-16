import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");

  // Function to get query parameters from URL
  const getQueryParam = (param) => {
    const params = new URLSearchParams(location.search);
    return params.get(param);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const query = e.target.value.trim();
      navigate(`/search?search=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    const search = getQueryParam("search");
    setSearchQuery(search || ""); // Set the input value from the URL
  }, [location.search]);

  return (
    <div className="search flex border border-slate-400  mx-[2%] w-[96%] md:w-[80%] lg:w-[96%] m-auto mt-3 rounded-lg shadow-lg">
      <div className="w-12 flex items-center justify-center">
        <IoSearchOutline />
      </div>
      <input
        className="w-full mr-1 text-base outline-none border-transparent focus:border-transparent focus:ring-0"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update state when typing
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default SearchBar;
