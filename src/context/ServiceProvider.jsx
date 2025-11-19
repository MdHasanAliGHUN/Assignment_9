import React, { createContext, useEffect, useState } from "react";
export const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch("/services.json");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log("Faild to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);


  const getServiceById = (id) => services.find((item) => item.serviceId === parseInt(id));

  const value = { services, getServiceById };
  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServiceProvider;
