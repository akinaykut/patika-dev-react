import { useState, createContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 1001211),
      text: "Study Exam",
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 1001211),
      text: "Study Math",
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 1001211),
      text: "Study English",
      isCompleted: false,
    },
  ]);

  const values = {
    todos,
    setTodos,
    allTodos: todos,
  };

  useEffect(() => {}, [todos]);

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
