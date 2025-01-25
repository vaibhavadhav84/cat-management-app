import React, { useState } from "react";
import FetchButtons from "./components/FetchButtons";
import CatTable from "./components/CatTable";
import CatCard from "./components/CatCard";
import "./App.css";


const App = () => {
  const [catData, setCatData] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // Default to table view

  return (
    <div className="app-container">
      <h1>Welcome to Cat Management</h1>
      <p>Discover the world of adorable cats</p>
      <FetchButtons setCatData={setCatData} setViewMode={setViewMode} />
      {catData && (viewMode === "table" ? <CatTable catData={catData} /> : <CatCard catData={catData} />)}

    </div>
  );
};

export default App;
