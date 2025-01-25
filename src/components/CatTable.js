import React from "react";

const CatTable = ({ catData }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Breed</th>
            <th>Origin</th>
            <th>Temperament</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={catData.url} alt="Cat" className="cat-image" /></td>
            <td>{catData.breeds ? catData.breeds[0].name : "Unknown"}</td>
            <td>{catData.breeds ? catData.breeds[0].origin : "Unknown"}</td>
            <td>{catData.breeds ? catData.breeds[0].temperament : "Unknown"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CatTable;
