import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div data-aos="fade-down">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
