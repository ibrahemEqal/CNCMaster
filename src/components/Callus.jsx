// src/pages/CallUs.jsx
import React from 'react';
import '../style/CallUs.css'; 
import Header from './Header';

const CallUs = () => {
  return (
    <div className="callus-container">
      <Header/>
      <h1>تواصل معنا 📞</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h2>واتساب</h2>
          <p>+972 59-254-8334</p>
        </div>
        <div className="contact-item">
          <h2>ايميل</h2>
          <p>ahmad.m.saleh@gmail.com</p>
        </div>
        <div className="contact-item">
          <h2>الموقع</h2>
          <p>سلفيت-كفل حارس</p>
        </div>
      </div>
      
      <h3>أو , أرسل رسالة</h3>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <textarea placeholder="Your Message" className="input-field" rows="5"></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default CallUs;
