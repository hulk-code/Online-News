import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex font-poppins font-light bg-slate-400">
        <button className="btn btn-outline ">Breaking News</button>
      <Marquee pauseOnHover={true} gradient={true} gradientColor="red">
      Israel strikes Lebanon again in violation of ceasefire agreement, nine killed

      </Marquee>
    </div>
  );
};

export default BreakingNews;
