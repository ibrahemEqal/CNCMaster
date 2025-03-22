import React from 'react';
import '../style/Location.css';
import Header from '../components/Header'
const Location = () => {
  return (
    <div className="location-container">
        <Header/>
      <h1>موقعنا</h1>
      <p> تجدنا في العنوان التالي:</p>
      <div className="address">
       <p>كفل حارس -شارع ديراستيا</p>
        <p>+972 59-254-8334</p>
      </div>
      <a
        href="https://www.google.com/maps/search/?q=32.118722, 35.154761"
        target="_blank"
        rel="noopener noreferrer"
        className="location-link"
      >
        <button>فتح في خرائط جوجل</button>
      </a>
    </div>
  );
};

export default Location;
