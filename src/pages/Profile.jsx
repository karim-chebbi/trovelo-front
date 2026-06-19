import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { lougoutUser } from "../JS/Actions/authActions";
import { useNavigate } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";

const Profile = () => {
  const user = useSelector((state) => state.AuthReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md border p-8">
        <div className="flex items-center gap-6">
          <div className="h-28 w-28 rounded-full bg-indigo-100 grid place-items-center text-indigo-600 text-3xl font-bold">
            {user?.firstName
              ? user.firstName.charAt(0)
              : user?.name
                ? user.name.charAt(0)
                : "U"}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-slate-900">
              {user?.firstName
                ? `${user.firstName} ${user.lastName ?? ""}`
                : (user?.name ?? "User")}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Member since{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "—"}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <FiMail className="text-slate-400" />
                <span>{user?.email ?? "—"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-slate-400" />
                <span>{user?.phone ?? "—"}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/edit-profile")}
              className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(lougoutUser(navigate))}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm text-red-600 hover:bg-slate-50"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-medium text-slate-700">
              Personal Info
            </h3>
            <div className="mt-2 text-sm text-slate-600">
              <p>
                <strong>Full name:</strong>{" "}
                {user?.firstName
                  ? `${user.firstName} ${user.lastName ?? ""}`
                  : (user?.name ?? "—")}
              </p>
              <p className="mt-1">
                <strong>Email:</strong> {user?.email ?? "—"}
              </p>
              <p className="mt-1">
                <strong>Phone:</strong> {user?.phone ?? "—"}
              </p>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-medium text-slate-700">Account</h3>
            <div className="mt-2 text-sm text-slate-600">
              <p>
                <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
              </p>
              <p className="mt-1">
                <strong>Registered:</strong>{" "}
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleString()
                  : "—"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
