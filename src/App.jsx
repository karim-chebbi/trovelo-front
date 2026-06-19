import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import SuccessNotif from "./components/SuccessNotif";
import ErrorNotif from "./components/ErrorNotif";
import { currentUser } from "./JS/Actions/authActions";
import ScooterDescription from "./pages/ScooterDescription";
import About from "./pages/About";

const Contact = lazy(() => import("./pages/Contact"));
const Marketplace = lazy(() => import("./pages/MarketPlace"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  const dispatch = useDispatch();

  const scooterSuccess = useSelector((state) => state.ScooterReducer.success);
  const scooterErrors = useSelector((state) => state.ScooterReducer.errors);

  const authSuccess = useSelector((state) => state.AuthReducer.success);
  const authErrors = useSelector((state) => state.AuthReducer.errors);

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      {scooterSuccess &&
        scooterSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {scooterErrors &&
        scooterErrors.map((error) => (
          <ErrorNotif key={error.id} error={error} />
        ))}

      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {authErrors &&
        authErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}

      <Suspense fallback={<Loading />}>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route
            path="/scooter_description/:id"
            element={<ScooterDescription />}
          />
          <Route path="/" element={<Marketplace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
