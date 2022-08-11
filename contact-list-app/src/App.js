import "./App.css";
import { useState, useEffect } from "react";
import ContactApp from "./components/ContactApp";
import Form from "./components/Form";

function App() {
  const [array, setArray] = useState([
    {
      id: 1,
      name: "Akin",
      phoneNumber: "256532554",
    },
    {
      id: 2,
      name: "Onur",
      phoneNumber: "9876542131",
    },

    {
      id: 3,
      name: "Burak",
      phoneNumber: "18426542131",
    },
  ]);

  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ContactApp array={array} />

      <Form array={array} setArray={setArray} />
    </div>
  );
}

export default App;
