import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
        <button className="btn btn-outline">Breaking News</button>
      <Marquee pauseOnHover={true} gradient={true} gradientColor="red">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
