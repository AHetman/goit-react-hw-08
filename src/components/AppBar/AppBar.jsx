import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import useOwn from "../../hookUseOwn/hookUseOwn";

import css from "./AppBar.module.css";

const AppBar = () => {
  const { isLoggedIn } = useOwn();

  return (
    <header className={css.header}>
      <div className={css.appBarNavigation}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
