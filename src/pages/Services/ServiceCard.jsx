import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ services }) => {
  const { serviceId, image, serviceName, providerName, rating, price } =
    services;

  return (
    <div
      data-aos="fade-down"
      className="card bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-sm border border-gray-200 hover:-translate-y-1 p-5 my-5"
    >
      {/*Image */}
      <div className="h-56 overflow-hidden rounded-md">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-gray-800">
          {serviceName}
        </h2>
        <p className="text-sm text-gray-500">By: {providerName}</p>

        {/*  Rating Price */}
        <div className="flex justify-between items-center mt-3">
          <span className="flex items-center text-yellow-500 font-semibold">
            <FaStar className="mr-1 text-base" /> {rating}
          </span>
          <span className="text-blue-600 font-bold text-base">${price}</span>
        </div>

        {/* View Details Button */}
        <Link
          to={`/ServiceDetails/${serviceId}`}
          className="inline-block w-full text-center bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 px-5 py-2 rounded-md mt-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
