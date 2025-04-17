import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner/Banner";
import Category from "../components/Home/Category/Category";
import Featured from "../components/Home/Featured/Featured";
import PopularMenu from "../components/Home/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
