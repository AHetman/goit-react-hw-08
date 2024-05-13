import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Circles
      height="70"
      width="70"
      color="#3fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
