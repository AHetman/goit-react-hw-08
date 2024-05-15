import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNavigationContainer}>
      <NavLink to="/register" className={css.authNavigationLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authNavigationLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
