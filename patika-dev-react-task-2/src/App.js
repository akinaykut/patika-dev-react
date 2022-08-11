import "./App.css";
import React from "react";
import List from "./components/List";

import { DataProvider } from "./components/context/DataContext";
import AddItem from "./components/AddItem";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <h1>Todos App</h1>

      <hr />

      <DataProvider>
        <AddItem />
        <List />
        <Filter />
      </DataProvider>
    </div>
  );
}

export default App;

/* import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    isCompleted: false,
    text: "Study English",
  });

  function handleClick() {
    setData({ ...data, isCompleted: !data.isCompleted });
    console.log(data.isCompleted);
  }

  function deleteItem() {
    setData({});
  }

  useEffect(() => {}, [data]);

  return (
    <div className="App">
      <div className="list-style">
        <div className="list-item">
          <input type="checkbox" onClick={handleClick} />
          <li className={data.isCompleted ? "completed" : ""}>{data.text}</li>
        </div>
        <button onClick={deleteItem}>Del</button>
      </div>
    </div>
  );
}

export default App;
 */
