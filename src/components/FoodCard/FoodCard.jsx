const FoodCard = ({item}) => {
    console.log(item);
    const {image, price, recipe, name} = item || {}
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="relative">
        <p className="bg-slate-700 p-2 rounded text-white absolute right-3 top-2">${price}</p>
        <img
          className="w-full"
          src={image}
          alt="food-item"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-c font-black text-center">{name}</h2>
        <p className="font-i text-center">
         {recipe}
        </p>
        <div className="card-actions justify-center">
          <button className="mt-3 btn uppercase  border-0 border-b-4 btn-neutral btn-outline">add tot card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
