import { useContext } from "react";
import DataContext from "../context/DataContext";

const Filter = () => {
  const { todos, setTodos } = useContext(DataContext);

  const allTodos = todos;

  function showActive() {
    let active = todos.filter((item) => item.isCompleted === false);
    setTodos(active);
  }

  function showCompleted() {
    let completed = todos.filter((item) => item.isCompleted === true);
    setTodos(completed);
  }

  function showAll() {
    setTodos(allTodos);
  }

  return (
    <div>
      <button onClick={showCompleted}>Completed</button>{" "}
      <button onClick={showActive}>Active</button>
      <button onClick={showAll}>All</button>
    </div>
  );
};

export default Filter;
