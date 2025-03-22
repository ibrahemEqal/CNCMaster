import React from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import Tw1 from '../img/Tw1.jpg'
import Tw2  from '../img/T2.jpg'
const TwCard = () => {
  return (
    <div className="Tq-Card">
        <Header/>
      <ProductCard
        image={Tw1}
        title="₪توزيعات بيبي 35 (x50)"
        description="توزيعات بيبي ,حفر الاسم على الشكل"
        buttonText="شراء"
      />

      <ProductCard
        image={Tw2}
        title="₪توزيعات اسماء50(x50)"
        description="قص اسماء خشب بالليزر بدقة"
        buttonText="شراء"
      />
    </div>
  );
};

export default TwCard;