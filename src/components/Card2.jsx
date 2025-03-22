import React from 'react';
import Card from './Card';
import '../style/Card.css';
import Taleq from '../img/Taleqat.png';

const Card2 = () =>{
    return(
        <Card image={Taleq} title="تعليقات" description="أضف لمسة دافئة وطبيعية لمنزلك أو مناسباتك مع تعليقات خشبية فريدة. مصممة بدقة من خشب عالي الجودة، تضفي لمسة من الأناقة والدفء على كل زاوية أو مناسبة."
        buttonText="تصفح" 
        />
    )
}

export default Card2;