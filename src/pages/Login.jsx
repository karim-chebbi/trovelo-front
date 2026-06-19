import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import { loginUser } from "../JS/Actions/authActions";
import Loading from "../components/Loading";
import Logo from "../components/Logo";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.AuthReducer.load);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, navigate));
  };

  //  console.log(user);
  return (
    <div className="flex min-h-full items-center justify-center bg-slate-50 px-6 py-12 lg:px-8">
      <div className="w-full max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <div className="flex justify-center items-center gap-2">
            <Logo />
            <Zap className="text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-slate-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Access your dashboard and manage scooters.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-slate-100 p-8 shadow-md">
          <form onSubmit={handleLogin} className="space-y-6">
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
                  onChange={handleInputChange}
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <FiLock />
                </span>
                <input
                  onChange={handleInputChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-2 pl-10 text-base text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              {loading ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
                >
                  Sign in
                </button>
              )}
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
