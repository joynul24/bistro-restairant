import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, subTitle, coverImg }) => {
  return (
    <div className="mt-20">
      {title && (
        <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
      )}
      <div className="grid md:grid-cols-2 mt-20 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex mt-10">
          <button className="btn border-0 border-b-4 mx-auto btn-neutral btn-outline">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
