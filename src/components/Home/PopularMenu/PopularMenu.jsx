import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item=> item.category === 'popular');
            setMenu(popularMenu)
        })
    }, [])
console.log(menu);
    return (
        <div>
            <SectionTitle
            subHeading='---Check it out---'
            heading='FROM OUR MENU'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn flex mx-auto mt-10 border-0 border-b-4 btn-neutral btn-outline uppercase">View full menu</button>
        </div>
    );
};

export default PopularMenu;