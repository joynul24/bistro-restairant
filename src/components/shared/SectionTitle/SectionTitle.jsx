
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-20">
            <p className="md:text-xl text-orange-400 text-center font-i">{subHeading}</p>
            <h3 className="mt-4 text-center md:text-4xl border-y-4 py-5 border-y-[#E8E8E8] md:w-md mx-auto font-bold font-c">{heading}</h3>
        </div>
    );
};

export default SectionTitle;