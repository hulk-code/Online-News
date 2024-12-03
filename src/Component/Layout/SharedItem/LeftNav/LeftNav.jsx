import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="font-poppins font-bold text-lg mb-3 ">All Categories </h1>
      {categories.map((categorie) => (
        <Link
          className="block text-center text-slate-400 font-poppins font-thin p-2
                     hover:bg-slate-700 active:bg-slate-700 focus:outline-none 
                     focus:ring focus:ring-violet-300"
          key={categorie.id}
        >
          {categorie.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftNav;
