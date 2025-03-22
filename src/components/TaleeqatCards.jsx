import React from "react";
import ProductCard from './ProductCard';
import Tq1 from '../img/Tq1.jpeg';
import Tq2 from '../img/Tq2.jpeg';
import Tq3 from '../img/Tq3.jpeg';
import Tq4 from '../img/Tq4.jpeg';
import Header from "./Header";
const TqCard =()=>{

    return(
        <div className="Tq-Card">
                <Header/>
        <ProductCard image={Tq1} title="₪تعليقة منزل 79" description="تعليقة لمدخل المنزل باسم صاحب المنزل من الخشب والاكريلك"
        buttonText="شراء"
        />

        <ProductCard image={Tq2} title="₪89 تعليقة منزل" description="تعليقة لمدخل المنزل باسم صاحب المنزل من الخشب والاكريلك"
        buttonText="شراء"
        />
        <ProductCard image={Tq3} title="₪99 تعليقة منزل" description="تعليقة لمدخل المنزل باسم صاحب المنزل من الخشب والاكريلك"
        buttonText="شراء"
        />
        <ProductCard image={Tq4} title="₪79 تعليقة منزل" description="تعليقة لمدخل المنزل باسم صاحب المنزل من الخشب والاكريلك"
        buttonText="شراء"
        />

        </div>
    );
}

export default TqCard;