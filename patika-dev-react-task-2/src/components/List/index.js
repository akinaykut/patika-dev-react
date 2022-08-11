import "./style.css";
import DataContext from "../context/DataContext";
import { useContext, useEffect } from "react";

const List = ({ allTodos }) => {
  const { todos, setTodos } = useContext(DataContext);

  function isChecked(task) {
    /*  let newTodos = todos.filter((item) => item.id !== task.id);
    let newTask = {
      id: task.id,
      text: task.text,
      isCompleted: !task.isCompleted,
    };

    setTodos([...newTodos, newTask]); */

    setTodos((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === task.id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  }

  function deleteItem(task) {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id !== task.id;
      });
    });

    /* let newTodos = todos.filter((item) => item.id !== task.id);
    setTodos(newTodos); */
  }

  useEffect(() => {}, []);

  return (
    <ul>
      {todos.map((item) => {
        return (
          <div className="list-style" key={item.id}>
            <div className="list-item">
              <input type="checkbox" onClick={() => isChecked(item)} />
              <li className={item.isCompleted ? "completed" : ""}>
                {item.text}
              </li>
            </div>
            <button onClick={() => deleteItem(item)}>Del</button>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
