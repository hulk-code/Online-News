import Header from "../../SharedItem/Header/Header";
import LeftNav from "../../SharedItem/LeftNav/LeftNav";
import Navber from "../../SharedItem/Navber/Navber";
import BreakingNews from "../BreakingNews/BreakingNews";
import MidNav from "../MidNav/MidNav";
import RightNav from "../RightNav/RightNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navber></Navber>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <LeftNav></LeftNav>
        </div>

        <div className="col-span-2">
          <MidNav></MidNav>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
