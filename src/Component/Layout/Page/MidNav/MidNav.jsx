import { useEffect, useState } from "react";
import AllNews from "./AllNews/AllNews";

const MidNav = () => {
  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("../../../../../public/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const currentNews = allNews.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <h1 className="font-poppins text-lg font-bold mb-5">Dargon News Home</h1>
      <div className="space-y-4  flex flex-col items-center">
        {currentNews.map((todayNews) => (
          <AllNews key={todayNews.id} todayNews={todayNews}></AllNews>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {currentPage > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            Previous
          </button>
        )}
        {startIndex + itemsPerPage < allNews.length && (
          <button
            onClick={handleNext}
            className="bg-green-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 hover:shadow-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MidNav;
