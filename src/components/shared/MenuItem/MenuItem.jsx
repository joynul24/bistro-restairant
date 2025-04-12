
const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item || {}
    return (
        <div className="flex px-3 md:px-0 flex-col md:flex-row gap-8">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-full md:w-32" src={image} alt="" />
            <div>
                <h3 className="font-bold font-c md:text-xl">{name}</h3>
                <p className="font-i text-gray-600">{recipe}</p>
            </div>
            <p className="text-orange-400 text-xl">{price}</p>
        </div>
    );
};

export default MenuItem;