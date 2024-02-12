import React, { useState, useEffect } from "react";
import "./App.css";
import apiObj from "./fetchedApi";
import Apod from "./Apod";

function App() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const fetchedData = await apiObj.fetchData(4);
      setAppData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {
        appData.map((item, index) => (
          <Apod apodData={item} key={index} />
        ))
      }
    </div>
  );
}

export default App;
