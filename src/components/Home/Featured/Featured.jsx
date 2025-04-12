import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured-item bg-fixed md:pt-1 md:mt-20 md:pb-32 mt-10">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="flex md:px-20 flex-col md:flex-row gap-10 items-center">
        <img className="md:w-[600px]" src={featuredImg} alt="" />
        <div className="text-white space-y-2 px-3 md:px-0">
          <p className="font-c">March 20, 2023</p>
          <p className="font-c"> WHERE CAN I GET SOME? </p>
          <p className="font-i">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error voluptate facere, deserunt dolores
          maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
          tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn border-0 border-b-4 btn-neutral btn-outline">Oder Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
