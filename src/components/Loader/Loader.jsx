import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <Circles
      classname={css.Circles}
      height="80"
      width="80"
      color="rgb(7, 86, 143)"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Loader;
