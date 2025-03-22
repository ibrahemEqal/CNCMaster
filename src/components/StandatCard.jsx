import React from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import St1 from "../img/St1.jpg";
import St2 from "../img/St2.jpg";
import St3 from "../img/St3.jpg";

const StCard = () => {
  return (
    <div className="Tq-Card">
        <Header/>
      <ProductCard
        image={St1}
        title="₪ستاندات ذهب 200"
        description="ستاندات ذهب للعرسان بأدق التصاميم واجملها"
        buttonText="شراء"
      />

      <ProductCard
        image={St2}
        title="₪ستاندات ذهب 200"
        description="ستاندات ذهب للعرسان بأدق التصاميم واجملها"
        buttonText="شراء"
      />
      <ProductCard
        image={St3}
        title="₪ستاندات ذهب 200"
        description="ستاندات ذهب للعرسان بأدق التصاميم واجملها"
        buttonText="شراء"
      />
    </div>
  );
};

export default StCard;