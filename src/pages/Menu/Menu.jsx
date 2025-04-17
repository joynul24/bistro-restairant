import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover/Cover";
import PopularMenu from "../../components/Home/PopularMenu/PopularMenu";
import coverImg from "../../assets/menu/banner3.jpg";
import imgFizza from "../../assets/menu/pizza-bg.jpg";
import imgSalad from "../../assets/menu/salad-bg.jpg";
import imgDessert from "../../assets/menu/dessert-bg.jpeg";
import imgSoup from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import MenuCategory from "../../components/shared/MenuCategory/MenuCategory";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  // console.log(menu);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={coverImg}
        title="OUR MENU"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        coverImg={imgDessert}
        items={dessert}
        title="dessert"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* fizza menu items */}
      <MenuCategory
        coverImg={imgFizza}
        items={pizza}
        title="pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        coverImg={imgSoup}
        items={soup}
        title="soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        coverImg={imgSalad}
        items={salad}
        title="salad"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
