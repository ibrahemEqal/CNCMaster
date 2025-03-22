import React from 'react';
import Card from './Card';
import Tawz from '../img/tazeeat.webp';
const Card1 = () => {
  return (
    <Card image={Tawz} title="توزيعات" description="قدموا لأحبابكم تجربة فريدة مع توزيعات أسماء العرسان بتقنية الـ CNC ليزر. تصميمات دقيقة تضفي لمسة فاخرة على حفل الزفاف وتترك انطباعًا لا يُنسى في قلب ضيوفكم."
    buttonText="تصفح" 
    />
  );
};

export default Card1;
