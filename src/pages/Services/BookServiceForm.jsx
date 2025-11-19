import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Service booked successfully!");
    reset();
  };

  return (
    <div data-aos="flip-up" className="bg-transparent p-6 rounded-md border hover:border-green-600 border-gray-300 py-5 transition-all ease-in-out duration-300">
      <h2 className="text-2xl font-bold mb-4">Book This Service</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors w-full md:w-auto cursor-pointer"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookServiceForm;
