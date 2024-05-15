import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

// import { fetchContacts } from "../redux/contacts/operations";
import { refreshUser } from "../../redux/auth/operations";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import useOwn from "../../hookUseOwn/hookUseOwn";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useOwn();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div className={css.loader}>
      <Loader />
    </div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
    </Layout>
  );
};

export default App;
