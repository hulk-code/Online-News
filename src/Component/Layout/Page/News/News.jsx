import moment from "moment";
import logo1 from "../../../../assets/1.png";
import logo2 from "../../../../assets/2.png";
import logo3 from "../../../../assets/3.png";
import { FaStore } from "react-icons/fa";

const News = ({ allNews }) => {
  const { title, photo_url, short_description, category, id } = allNews;

  let logo;
 
  if (id === 1) {
    logo = logo1;
  } else if (id === 2) {
    logo = logo2;
  } else if (id === 3) {
    logo = logo3;
  }
  const formattedDate = moment().subtract(10, 'days').format('MMMM D, YYYY');
  return (
    <div>
      <div className="card bg-base-100 w-full ">
     
        <figure className="px-10 pt-10 relative">
          
          
       
          <img
            src={logo}
           
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title">{title}</h2>

          <div className="flex items-center ">
          <p className="flex items-center"><FaStore></FaStore>
            {category}</p>
          <p className="font-poppins text-sm p-3">
         {formattedDate}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
