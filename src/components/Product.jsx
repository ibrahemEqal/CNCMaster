import React from "react";
import TqCard from "../components/TaleeqatCards";
import TwCard from "../components/TawzeeatCard";
import StCard from "../components/StandatCard";
import Header from "./Header";

const Product = () => {
  return (
    <>
      <Header />
      <TqCard ShowHeader={false} />
      <TwCard ShowHeader={false} />
      <StCard ShowHeader={false} />
    </>
  );
};

export default Product;
