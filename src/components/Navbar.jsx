import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Store, Mail, Info, User, LogOut, Zap } from "lucide-react";
import { lougoutUser } from "../JS/Actions/authActions";
import Logo from "./Logo";

const navigation = [
  { name: "Marketplace", href: "/", icon: Store },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const user = useSelector((state) => state.AuthReducer.user);

  const dispatch = useDispatch();

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-1.5 group">
            <Logo />
            <Zap
              className="size-4 text-blue-500 fill-blue-500 transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`relative flex items-center gap-1.5 text-sm font-semibold py-2 transition-colors ${
                  active
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.name}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-blue-500 transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          {isAuth ? (
            <div
              className="relative"
              onMouseEnter={() => setUserMenuOpen(true)}
              onMouseLeave={() => setUserMenuOpen(false)}
            >
              <div className="flex items-center gap-3 cursor-pointer rounded-md px-3 py-2 hover:bg-slate-50">
                <div className="h-10 w-10 rounded-full bg-indigo-100 grid place-items-center text-indigo-600 font-semibold">
                  {user?.firstName
                    ? user.firstName.charAt(0)
                    : user?.name
                      ? user.name.charAt(0)
                      : "U"}
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-sm font-medium text-slate-900">
                    {user?.firstName
                      ? `${user.firstName} ${user.lastName ?? ""}`
                      : (user?.name ?? "User")}
                  </span>
                  <span className="text-xs text-slate-500">{user?.email}</span>
                </div>
              </div>
              <div
                className={`${userMenuOpen ? "block" : "hidden"} absolute right-0 mt-2 w-44 rounded-md border bg-white p-2 shadow-lg`}
              >
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded"
                >
                  Profile
                </Link>
                <button
                  onClick={() => dispatch(lougoutUser(navigate))}
                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-slate-50 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Log in <span aria-hidden="true">→</span>
              </Link>
              <Button
                onClick={() => navigate("/register")}
                type="primary"
                className="bg-blue-500! hover:bg-blue-600! border-none!"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo />
              <Zap
                className="size-4 text-blue-500 fill-blue-500"
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-100">
              <div className="space-y-1 py-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6 space-y-3">
                {isAuth ? (
                  <>
                    <Button
                      onClick={() => navigate("/profile")}
                      icon={<User className="size-4" />}
                      block
                    >
                      Profile
                    </Button>
                    <Button
                      onClick={() => dispatch(lougoutUser(navigate))}
                      icon={<LogOut className="size-4" />}
                      variant="text"
                      color="danger"
                      block
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-900 hover:bg-slate-50"
                    >
                      Log in
                    </Link>
                    <Button
                      onClick={() => navigate("/register")}
                      type="primary"
                      block
                      className="bg-blue-500! hover:bg-blue-600! border-none!"
                    >
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
