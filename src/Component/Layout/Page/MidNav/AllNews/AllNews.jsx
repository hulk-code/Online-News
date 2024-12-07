/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEye, FaRegStar, FaShare, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

const AllNews = ({ todayNews }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const { number } = todayNews.rating;
  const fullStars = Math.floor(number);
  const halfStar = number % 1 !== 0;

  const detailsPreview = todayNews?.details.slice(
    0,
    Math.ceil(todayNews.details.length / 4)
  );

  return (
    <div>
      <div className="card bg-base-100 w-full border border-pink-200">
        <div className="flex justify-between items-center p-3 bg-slate-100">
          <div className="flex gap-5 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={todayNews.author?.img} alt="Author Avatar" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{todayNews.author?.name}</p>
              <p className="text-sm text-gray-500">
                {todayNews.author?.published_date}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <FaBookBookmark className="cursor-pointer" />
            <FaShare className="cursor-pointer" />
          </div>
        </div>

        <div className="font-poppins font-bold text-lg p-3">
          {todayNews.title}
        </div>

        <img
          className="w-3/4 mx-auto aspect-[2/1] object-cover"
          src={todayNews.thumbnail_url}
          alt="Thumbnail"
        />

        <div className="card-body">
          <h2 className="card-title">
            <h1>
              {showFullDetails ? todayNews.details : `${detailsPreview}...`}
            </h1>
          </h2>

          <button
            onClick={() => setShowFullDetails(!showFullDetails)}
            className="text-blue-500 font-semibold mt-2 hover:underline"
          >
            {showFullDetails ? "Read Less" : "Read More"}
          </button>
          <hr />

          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <div className="rating flex gap-1">
                {Array.from({ length: fullStars }).map((_, index) => (
                  <FaStar key={`full-${index}`} className="text-yellow-400" />
                ))}

                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}

                {Array.from({ length: 5 - Math.ceil(number) }).map(
                  (_, index) => (
                    <FaRegStar
                      key={`empty-${index}`}
                      className="text-yellow-400"
                    />
                  )
                )}
              </div>
            </div>
            <div className="badge badge-outline gap-3">
               <FaEye></FaEye> {todayNews.total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
