import React from "react";
import { expertsData } from "../constants/expertsData";
import SectionTitle from "./SectionTitle";

const MeetOurVets = () => {
  return (
    <section data-aos="zoom-out" className="py-12 bg-white">
      <div className="container-custom  text-center">
        <SectionTitle title=" Meet Our Expert Vets" />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {expertsData.map((vet) => (
            <div
              key={vet.id}
              className="bg-blue-50 rounded-md shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <img
                src={vet.photo}
                alt={vet.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {vet.name}
              </h3>
              <p className="text-gray-600 mt-1">{vet.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurVets;
