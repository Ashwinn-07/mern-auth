import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOut,
} from "../redux/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    try {
      const response = await fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.secure_url) {
        setFormData((prev) => ({ ...prev, profilePicture: data.secure_url }));
        setImageError(false);
        toast.success("Profile picture uploaded successfully!");
      }
    } catch (error) {
      console.error(error);
      setImageError(true);
      toast.error("Failed to upload profile picture");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        toast.error(data.message || "Update failed");
        return;
      }
      dispatch(updateUserSuccess(data));
      toast.success("Profile updated successfully!");
    } catch (error) {
      dispatch(updateUserFailure(error));
      toast.error("Failed to update profile");
    }
  };

  const handleDeleteAccount = () => {
    toast.info(
      <div>
        <p>
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss();
              try {
                dispatch(deleteUserStart());
                const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                if (data.success === false) {
                  dispatch(deleteUserFailure(data));
                  toast.error(data.message || "Failed to delete account");
                  return;
                }
                dispatch(deleteUserSuccess(data));
                toast.success("Account deleted successfully");
              } catch (error) {
                dispatch(deleteUserFailure(error));
                toast.error("Failed to delete account");
              }
            }}
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };

  const handleSignOut = () => {
    toast.info(
      <div>
        <p>Are you sure you want to sign out?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss();
              try {
                await fetch("/api/auth/signout");
                dispatch(signOut());
                toast.success("Signed out successfully");
              } catch (error) {
                console.log(error);
                toast.error("Failed to sign out");
              }
            }}
            className="px-3 py-1 bg-slate-700 text-white rounded-md hover:bg-slate-800"
          >
            Sign Out
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />

        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          onClick={handleDeleteAccount}
          className="text-red-700 cursor-pointer hover:underline"
        >
          Delete Account
        </span>
        <span
          onClick={handleSignOut}
          className="text-red-700 cursor-pointer hover:underline"
        >
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;
