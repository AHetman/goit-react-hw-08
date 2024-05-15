import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import useOwn from "../../hookUseOwn/hookUseOwn";

import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useOwn();

  return (
    <div>
      {isLoggedIn ? (
        <div className={css.userMenu}>
          <div className={css.username}>Welcome, {user.name}</div>
          <button
            onClick={() => dispatch(logOut())}
            className={css.logoutButton}
          >
            Logout
          </button>
        </div>
      ) : (
        <span className={css.username}>Welcome, User</span>
      )}
    </div>
  );
};

export default UserMenu;
