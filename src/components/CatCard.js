import React from "react";

const CatCard = ({ catData }) => {
  return (
    <div className="card-container">

      <img src={catData.url} alt="Cat" className="cat-image-large" />

      
      <h2>{catData.breeds ? catData.breeds[0].name : "Unknown"}</h2>
      <p><strong>ID:</strong> {catData.breeds ? catData.breeds[0].id: "Unknown"}</p>
      <p><strong>Origin:</strong> {catData.breeds ? catData.breeds[0].origin : "Unknown"}</p>
      <p><strong>Temperament:</strong> {catData.breeds ? catData.breeds[0].temperament : "Unknown"}</p>
      <p><strong>Description:</strong> {catData.breeds ? catData.breeds[0].description : "No description available"}</p>


    </div>
  );
};

export default CatCard;
