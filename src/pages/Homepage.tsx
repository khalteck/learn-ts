import * as React from "react";
import InputField from "../components/InputField.tsx";
import { Itodo } from "../model.ts";
import TodosCont from "../components/TodosCont.tsx";

const Homepage: React.FC = () => {
  const [focus, setFocus] = React.useState<boolean>(false);
  const [todo, setTodo] = React.useState<string>("");

  const storedTodos = localStorage.getItem("allTodos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];
  const [allTodos, setAllTodos] = React.useState<Itodo[]>(initialTodos);

  const handleAdd = () => {
    if (todo) {
      const todos = [
        ...allTodos,
        {
          id: generateUniqueId(),
          todo,
          isDone: false,
        },
      ];
      setAllTodos(todos);
      localStorage.setItem("allTodos", JSON.stringify(todos));
      setTodo("");
      setFocus(false);
    }
  };

  function generateUniqueId() {
    const newId = allTodos[allTodos?.length - 1]?.id + 1 || 1;

    return newId;
  }

  return (
    <div className="w-full min-h-screen bg-[#2f74c0] text-white py-14 md:px-10 px-3 flex flex-col items-center font-neu relative">
      <h1 className="text-[2rem] uppercase z-[3]">Taskify</h1>
      <InputField
        focus={focus}
        setFocus={setFocus}
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      {focus && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/50"></div>
      )}

      <TodosCont allTodos={allTodos} setAllTodos={setAllTodos} />
    </div>
  );
};

export default Homepage;
