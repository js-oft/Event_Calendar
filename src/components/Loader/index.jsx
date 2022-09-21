import React from "react";
import { Overlay, CustomLoader } from "./style";

const Loader = () => {
  return (
    <>
      <Overlay />
      <CustomLoader>Loading...</CustomLoader>
    </>
  );
};
export default Loader;
