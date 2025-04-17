import Cover from "../../shared/Cover/Cover";
import "./GreetingCover.css"

const GreetingCover = () => {
    return (
        <div className="greeting-img bg-fixed py-12 px-10 md:py-28 md:px-28">
          <div className="bg-white py-3 px-2 md:px-40 md:py-24 rounded-xl text-center">
            <h1 className="md:text-3xl font-bold font-c">Bistro Boss</h1>
            <p className="font-i text-sm md:text-base mt-2 md:mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
    );
};

export default GreetingCover;