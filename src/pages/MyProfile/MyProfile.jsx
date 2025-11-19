import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import UpdateInformationForm from "./UpdateInformationForm";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  return (
    <div data-aos="zoom-out-up" className="flex justify-center py-10 ">
      <div className="md:bg-slate-100 p-8 rounded-md md:w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt={user?.displayName || "User"}
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
        </div>

        {/* User Info */}
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 font-medium">Name</p>
            <p className="text-gray-800 text-lg font-semibold">
              {user?.displayName || "No Name"}
            </p>
          </div>

          <div>
            <p className="text-gray-500 font-medium">Email</p>
            <p className="text-gray-800 text-lg font-semibold">
              {user?.email || "No Email"}
            </p>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowUpdateForm(!showUpdateForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Update Profile
          </button>
        </div>
        {showUpdateForm && (
          <UpdateInformationForm setShowUpdateForm={setShowUpdateForm} />
        )}
      </div>
    </div>
  );
};

export default MyProfile;
