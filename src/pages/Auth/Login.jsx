import { useContext, useState } from "react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // console.log(from)
  // console.log(location)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const email = watch("email");
  
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.log("Google login error:", error);
    }
  };

  return (
    <div
      data-aos="zoom-out"
      className="flex justify-center items-center py-15 bg-slate-700 px-7"
    >
      <div className="bg-white rounded-md p-8 w-full max-w-md md:max-w-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to your account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
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
                })}
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                className={`w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200 ${
                  errors.password ? "border-red-500" : ""
                }`}
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

          {/* Forget Password */}
          <div className="text-right">
            <NavLink
              to="/forgetPassword"
              state={{ email: email }}
              className="text-sm text-blue-400 hover:underline cursor-pointer"
            >
              Forgot Password?
            </NavLink>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Login Now
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-blue-300 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            <FaGoogle className="text-blue-700" /> Login with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account yet?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
