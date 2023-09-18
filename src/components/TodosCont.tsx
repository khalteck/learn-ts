import * as React from "react";
import { Itodo } from "../model.ts";

interface Iprops {
  allTodos: Itodo[];
  setAllTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
}

const TodosCont: React.FunctionComponent<Iprops> = ({
  allTodos,
  setAllTodos,
}) => {
  //=======================================to delete task
  function removeTodo(id: number) {
    const newTodos = allTodos?.filter((itm) => itm?.id !== id);
    setAllTodos(newTodos);
    localStorage.setItem("allTodos", JSON.stringify(newTodos));
  }

  //=============================================================to edit task
  const [edit, setEdit] = React.useState<number | null>(null);
  const [edittedTodo, setEdittedTodo] = React.useState<string>("");

  function handleSave(id: number) {
    if (edittedTodo) {
      const todos = [...allTodos]?.map((todo) => {
        if (todo?.id === id) {
          return { ...todo, todo: edittedTodo };
        } else {
          return todo;
        }
      });
      localStorage.setItem("allTodos", JSON.stringify(todos));
      setAllTodos(todos);
      setEdit(null);
    }
  }

  //==========================================================to mark task as done
  function handleDone(id: number) {
    const todos = [...allTodos]?.map((todo) => {
      if (todo?.id === id) {
        return { ...todo, isDone: !todo?.isDone };
      } else {
        return todo;
      }
    });
    localStorage.setItem("allTodos", JSON.stringify(todos));
    setAllTodos(todos);
  }

  return (
    <div className="w-full md:w-[70%] md:min-w-[550px] mt-5 flex flex-wrap justify-center gap-3">
      {allTodos?.length === 0 && (
        <div className="w-full h-[100px] border border-white/50 flex items-center justify-center rounded-md ">
          No tasks yet..
        </div>
      )}
      {allTodos?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[400px] min-w-[250px] p-3 rounded-md bg-[#0d9488] border border-white flex gap-2 justify-between"
          >
            {edit === item?.id ? (
              <form className="flex gap-2">
                <input
                  type="text"
                  className="w-[150px] px-2 text-black rounded-sm bg-white outline-none"
                  value={edittedTodo}
                  onChange={(e) => {
                    setEdittedTodo(e.target.value);
                  }}
                  autoFocus
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSave(item?.id);
                  }}
                  className="px-3 pt-1 text-[.85rem] bg-[#2f74c0] hover:bg-[#60a5fa] rounded-sm font-bold active:scale-[.8] transition-all duration-300"
                >
                  Save
                </button>
              </form>
            ) : item?.isDone ? (
              <s>{item?.todo}</s>
            ) : (
              <p>{item?.todo}</p>
            )}
            <div className="flex gap-2 items-center">
              {!item?.isDone && (
                <img
                  onClick={() => {
                    if (edit) {
                      setEdit(0);
                    } else {
                      setEdit(item?.id);
                      setEdittedTodo(item?.todo);
                    }
                  }}
                  alt=""
                  src="/images/icons8-edit-30.png"
                  className="w-5 h-5 cursor-pointer"
                />
              )}
              <img
                onClick={() => removeTodo(item?.id)}
                alt=""
                src="/images/icons8-delete-30.png"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                onClick={() => handleDone(item?.id)}
                alt=""
                src="/images/icons8-done-64.png"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodosCont;
