import React, { useContext } from "react";
import { ServiceContext } from "../../context/ServiceProvider";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { services, loading } = useContext(ServiceContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 data-aos="fade-down" className="text-3xl font-bold text-center my-7">
        Popular Winter Care Services
      </h2>

      <div  className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} services={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
