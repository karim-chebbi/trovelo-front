import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import { registerUser } from "../JS/Actions/authActions";
import Logo from "../components/Logo";
import { FiUser, FiPhone, FiMail, FiLock } from "react-icons/fi";

export default function Register() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(newUser, navigate));
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-slate-50 px-6 py-12 lg:px-8">
      <div className="w-full max-w-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <div className="flex justify-center items-center gap-2">
            <Logo />
            <Zap className="text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-slate-900">
            Create a new account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Join Trovelo to manage and list scooters.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-slate-100 p-8 shadow-md">
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-slate-700"
                >
                  First Name
                </label>
                <div className="mt-2 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <FiUser />
                  </span>
                  <input
                    onChange={(e) => handleInputChange(e)}
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-2 pl-10 text-base text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Last Name
                </label>
                <div className="mt-2 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <FiUser />
                  </span>
                  <input
                    onChange={(e) => handleInputChange(e)}
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-2 pl-10 text-base text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700"
              >
                Phone Number
              </label>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <FiPhone />
                </span>
                <input
                  onChange={(e) => handleInputChange(e)}
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-3 py-2 pl-10 text-base text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <FiMail />
                </span>
                <input
                  onChange={(e) => handleInputChange(e)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 pl-10 text-base text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <FiLock />
                </span>
                <input
                  onChange={(e) => handleInputChange(e)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white px-3 py-2 pl-10 text-base text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            You already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
