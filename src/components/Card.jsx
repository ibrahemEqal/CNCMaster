import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Card.css';

const Card = (props) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    if (props.title === "تعليقات") {
      navigate('/Tqcard');
    } 
    else if(props.title==="توزيعات") {
      navigate('/twcard');
    }
    else if(props.title=="ستاندات"){
      navigate('/stcard');
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="Card Image" className="card-img" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{props.title}</h3>
          <button className="card-btn" onClick={handleClick}>
            {props.buttonText}
          </button>
          <p className="card-description">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
