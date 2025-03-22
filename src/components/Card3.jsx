import React from 'react';
import Card from './Card';
import '../style/Card.css';
import standat from '../img/Stantdat.png'

const Card3 = () =>{
    return(
    <Card image={standat} title="ستاندات" description="أضف لمسة فاخرة لحفل الزفاف مع ستاندات خواتم العرسان المصممة بدقة باستخدام تقنيات مبتكرة، تجمع بين الأناقة والجمال لعرض الخواتم والمجوهرات بأفضل شكل."
    buttonText="تصفح"
    />
    )
}

export default Card3;