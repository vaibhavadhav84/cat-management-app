import React from "react";
import axios from "axios";

const FetchButtons = ({viewMode, setCatData, setViewMode }) => {
  const fetchRandomCat = async () => {
    try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?has_breeds=1");
    const catID = response.data[0].id;
    const detailsResponse = await axios.get(`https://api.thecatapi.com/v1/images/${catID}`);
    setCatData(detailsResponse.data); // Set detailed cat data
    setViewMode("table"); // Switch to card view
  } catch (error) {
    console.error("Error fetching cat data:", error);
  }
  };

  const fetchCatDetails = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?has_breeds=1");
      const catID = response.data[0].id;
      const detailsResponse = await axios.get(`https://api.thecatapi.com/v1/images/${catID}`);
      setCatData(detailsResponse.data); // Set detailed cat data
      setViewMode("card"); // Switch to card view
    } catch (error) {
      console.error("Error fetching cat details:", error);
    }
  };

  return (
    <div className="buttons-container">
      <button onClick={fetchRandomCat}  className={viewMode === "table" ? "active" : ""} >Get Random Cat (Table View)</button>
      <button onClick={fetchCatDetails} className={viewMode === "card" ? "active" : ""}>Get Cat Details (Card View)</button>
    </div>
  );
};

export default FetchButtons;
