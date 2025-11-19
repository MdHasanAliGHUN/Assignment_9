import {
  FaSnowflake,
  FaPaw,
  FaBone,
  FaHome,
  FaTshirt,
  FaBath,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const winterCareTipsData = [
  {
    id: 1,
    title: "Keep pets indoors during extreme cold",
    description:
      "Avoid keeping your pets outside for long hours in freezing temperatures. Cold weather can cause hypothermia or frostbite.",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "Check paws regularly",
    description:
      "Clean and moisturize your pet's paws to prevent cracking, dryness, or frostbite caused by snow and ice.",
    icon: <FaPaw />,
  },
  {
    id: 3,
    title: "Feed a little extra",
    description:
      "Pets burn more calories in the cold, so slightly increase their food portions to maintain body warmth and energy.",
    icon: <FaBone />,
  },
  {
    id: 4,
    title: "Provide warm bedding",
    description:
      "Give your pet a soft, warm, and dry place to sleep away from cold floors or drafts. Blankets or pet heaters work great.",
    icon: <FaSnowflake />,
  },
  {
    id: 5,
    title: "Dress them properly",
    description:
      "Use sweaters, jackets, or booties to keep your pets warm and protect them from chilly winds during walks.",
    icon: <FaTshirt />,
  },
  {
    id: 6,
    title: "Avoid over-bathing",
    description:
      "Frequent baths can remove essential oils from your pet’s skin, causing dryness. Use mild shampoo and keep them dry after washing.",
    icon: <FaBath />,
  },
];

const WinterCareTips = () => {
  return (
    <section data-aos="fade-up" className="py-12 bg-blue-50">
      <div className="container-custom  text-center">
        <SectionTitle title="Winter Care Tips for Pets" />
        <div
          data-aos="fade-down"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {winterCareTipsData.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left"
            >
              <div className="text-4xl text-blue-400 mb-3">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
