import React, { useContext, useState } from "react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUser(data.email, data.password);
      if (userCredential) {
        // Update name and photoURL
        await updateUserProfile(data.name, data.photoURL);
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleSignUpGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.log("Google SignUp error:", error);
    }
  };

  return (
    <div data-aos="zoom-out" className="flex justify-center items-center py-10 px-7 bg-slate-700">
      <div className="bg-white rounded-md p-8 w-full max-w-md md:max-w-lg border border-gray-300 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Photo URL
            </label>
            <input
              {...register("photoURL", { required: "Photo URL is required" })}
              type="text"
              placeholder="Paste your photo URL"
              className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                    message:
                      "Password must include at least one uppercase & one lowercase letter",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeOutline />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleSignUpGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-blue-300 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            <FaGoogle className="text-blue-700" /> Sign up with Google
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
