import React from "react";

const Heading = ({ number, heading }) => {
  return (
    <section className="w-10/12 mx-auto">
      <div className=" font-semibold text-3xl flex items-end justify-center">
        <span className="text-[#ff0051]">{number}</span>
        <span className="text-black">{heading}</span>
        <hr className=" border-2 border-gray-800 w-full" />
      </div>
    </section>
  );
};

export default Heading;
