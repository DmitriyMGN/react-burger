import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import api from "../../utils/api.js";
import AppHeader from "../app-header/app-header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getData()
      .then((res) => setData(res.data))
  }, [])


  return (
    <div className="App">
      <AppHeader/>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
