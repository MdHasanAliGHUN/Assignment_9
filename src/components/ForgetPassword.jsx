import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const ForgetPassword = () => {
  const { forGetPassword } = useContext(AuthContext);
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: emailFromLogin },
  });

  const onSubmit = async (data) => {
    await forGetPassword(data.email);
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div 
      data-aos="zoom-out" className="flex items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-sm border border-e-green-600 hover:border-green-800 transition-all duration-300 ease-in-out w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Reset Your Password
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Reset Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-md transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
