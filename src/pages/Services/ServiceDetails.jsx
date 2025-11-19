import { useContext } from "react";
import { useLocation, useParams } from "react-router";
import { ServiceContext } from "../../context/ServiceProvider";
import { FaStar } from "react-icons/fa";
import BookServiceForm from "./BookServiceForm";

const ServiceDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const { getServiceById } = useContext(ServiceContext);

  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="text-center text-gray-900 mt-10 text-lg font-medium">
        Service not found
      </div>
    );
  }

  return (
    <div data-aos="zoom-out" className="container-custom bg-white rounded-md">
      {/* Image */}
      <div className="w-full h-96 overflow-hidden rounded-xl mb-6">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        {service.serviceName}
      </h1>

      {/* Provider Info */}
      <p className="text-gray-600 text-lg mb-2">
        By: <span className="font-semibold">{service.providerName}</span> |
        Email: <span className="text-blue-500">{service.providerEmail}</span>
      </p>

      {/* Category */}
      <p className="text-gray-700 font-medium text-lg mb-4">
        Category: <span className="text-blue-600">{service.category}</span>
      </p>

      {/* Rating, Price */}
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <div className="flex items-center text-yellow-500 font-semibold text-lg">
          <FaStar className="mr-1" /> {service.rating}
        </div>
        <div className="text-blue-600 font-bold text-lg">
          Price: ${service.price}
        </div>
        <div className="text-gray-700 font-medium text-lg">
          Slots Available: {service.slotsAvailable}
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-700 text-lg leading-relaxed mb-6">
        {service.description}
      </div>
      <BookServiceForm />
    </div>
  );
};

export default ServiceDetails;
