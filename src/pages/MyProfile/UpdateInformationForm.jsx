import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const UpdateInformationForm = ({ setShowUpdateForm }) => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await updateUserProfile(data.name, data.photoURL);
    reset();
    setShowUpdateForm(false);
  };

  return (
    <div
      data-aos="zoom-out-up"
      className="fixed inset-0 z-50 flex items-center justify-center mt-15"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl  border border-green-400 hover:border-green-700 transition-all duration-300 ease-in-out py-15 md:py-24 px-8 w-[80%] max-w-lg "
      >
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Update Your Profile
        </h3>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            defaultValue={user?.displayName || ""}
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your full name"
            className={`w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Photo URL */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-1">
            Photo URL
          </label>
          <input
            type="text"
            defaultValue={user?.photoURL || ""}
            {...register("photoURL", { required: "Photo URL is required" })}
            placeholder="Enter your photo URL"
            className={`w-full border ${
              errors.photoURL ? "border-red-500" : "border-gray-300"
            } p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.photoURL && (
            <p className="text-red-500 text-sm mt-1">
              {errors.photoURL.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            type="submit"
            className="flex-1 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-md transition"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setShowUpdateForm(false)}
            className="flex-1 cursor-pointer bg-gray-300 text-gray-800 py-2.5 rounded-lg font-medium hover:bg-gray-400 shadow-md transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateInformationForm;
