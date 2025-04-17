import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { LuGift } from "react-icons/lu";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <div className="px-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center px-28">
               <p className="mx-auto">
               <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
               </p>
                <p className="text-2xl md:text-7xl my-3 mx-auto">
                  <LuGift />
                </p>
                <p className="font-i my-3 text-center">{review.details}</p>
                <h3 className="text-3xl font-semibold text-[#CD9003] text-center font-c">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
