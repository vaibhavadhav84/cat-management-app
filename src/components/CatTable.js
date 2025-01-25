import React from "react";

const CatTable = ({ catData }) => {
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Breed Name</th>
            <th>Origin</th>
            <th>Temperament</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>

        <img src={catData.url} alt="Cat" className="cat-image" />
        
          <tr>

            <td>{catData.breeds ? catData.breeds[0].id : "Unknown"}</td>
            <td>{catData.breeds ? catData.breeds[0].name : "Unknown"}</td>
            <td>{catData.breeds ? catData.breeds[0].origin : "Unknown"}</td>
            <td>{catData.breeds ? catData.breeds[0].temperament : "Unknown"}</td>
            <td>{catData.breeds ? catData.breeds[0].description : "No description available"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CatTable;
