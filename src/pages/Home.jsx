import Banner from "../components/Home/Banner/Banner";
import Category from "../components/Home/Category/Category";
import Featured from "../components/Home/Featured/Featured";
import PopularMenu from "../components/Home/PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;