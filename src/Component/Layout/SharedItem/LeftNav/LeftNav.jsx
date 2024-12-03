import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import News from "../../Page/News/News";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  const [news ,setNews]=useState([])
  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(()=>{
    fetch('/public/shortnews.json')
    .then(res =>res.json())
    .then(data => setNews(data))
  }
  ,[])
  return (
    <div>
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
     <div>
        <h1 className="font-poppins font-thin text-center">All News</h1>
       <div>
       {
        news.map(allNews => <News key={allNews.id} allNews={allNews}></News>)
       }
       </div>
     </div>
    </div>
  );
};

export default LeftNav;
