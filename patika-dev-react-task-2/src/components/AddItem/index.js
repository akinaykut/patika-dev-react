import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import "./style.css";

const AddItem = () => {
  let [text, setText] = useState("");
  useEffect(() => {}, [text]);

  const { todos, setTodos } = useContext(DataContext);

  function handleClick() {
    if (text.length) {
      let newItem = {
        id: Math.floor(Math.random() * 1001211),
        text: text,
        isCompleted: false,
      };
      setTodos([...todos, newItem]);
      console.log(todos);
      setText("");
    }
  }

  return (
    <div className="margin-top">
      <input
        type="text"
        value={text}
        placeholder="Please enter a new task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddItem;
