import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner/Banner";
import Category from "../components/Home/Category/Category";
import Featured from "../components/Home/Featured/Featured";
import PopularMenu from "../components/Home/PopularMenu/PopularMenu";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import GreetingCover from "../components/Home/GreetingCover/GreetingCover";
import CallUs from "../components/Home/CallUs/CallUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <GreetingCover></GreetingCover>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
