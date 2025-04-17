import { Parallax } from "react-parallax";

const Cover = ({img, title, subTitle}) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="py-28 hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-2 font-c md:text-4xl font-bold">{title}</h1>
            <p className="mb-5 font-c">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
