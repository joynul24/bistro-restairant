import Cover from "../../components/shared/Cover/Cover";
import contactUsCover from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={contactUsCover}
        title="Contact Us"
        subTitle="Would you like to try a dish?"
      ></Cover>
      {/* Our Location */}
      <SectionTitle
        subHeading="--------Visit Us--------"
        heading="Our Location"
      ></SectionTitle>
      {/* Our Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* phone */}
        <div className="text-center">
          <button className="btn bg-[#D1A054] w-full text-white">
            <FaPhone />
          </button>
          <div className="bg-[#F3F3F3] pt-10 pb-20">
            <h3 className="font-c font-bold text-xl">Phone</h3>
            <p className="font-i text-gray-600 mt-2">013012490**</p>
          </div>
        </div>
        {/* address */}
        <div className="text-center">
          <button className="btn bg-[#D1A054] w-full text-white">
            <FaLocationDot />
          </button>
          <div className="bg-[#F3F3F3] pt-10 pb-20">
            <h3 className="font-c font-bold text-xl">Address</h3>
            <p className="font-i text-gray-600 mt-2">Sylhet, Dhaka</p>
          </div>
        </div>
        {/* working hours */}
        <div className="text-center">
          <button className="btn bg-[#D1A054] w-full text-white">
            <IoTime />
          </button>
          <div className="bg-[#F3F3F3] pt-10 pb-20">
            <h3 className="font-c font-bold text-xl">Working Hours</h3>
            <p className="font-i text-gray-600 mt-2">
              Mon - Fri: 08:00 - 22:00
            </p>
          </div>
        </div>
      </div>

     {/* contact us form */}
     <SectionTitle
      subHeading='---Send Us a Message---'
      heading='Contact Form'
     ></SectionTitle>
     <form className="card-body mt-12 md:p-12 bg-[#F3F3F3] space-y-2">
          <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              placeholder="Enter your email"
              className="w-full rounded input input-bordered"
              required
            />
          </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="password"
              placeholder="Enter your phone"
              className="rounded w-full input input-bordered"
            />
          </div>
         <div>
            <p className="text-gray-600 mb-2">Message</p>
         <textarea name="" className="bg-white pt-3 pl-3 outline-0 w-full" id="" placeholder="Write your message here" cols="" rows="10"></textarea>
         </div>
          <div className="md:flex md:justify-center w-full form-control mt-6">
            <button className="btn bg-[#D1A054] border-0 w-full md:w-auto flex items-center text-white">
              Send Message <FiSend />
            </button>
          </div>
        </form>

    </div>
  );
};

export default ContactUs;
