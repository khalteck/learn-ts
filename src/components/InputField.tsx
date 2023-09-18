import * as React from "react";

interface Props {
  focus?: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputField: React.FC<Props> = ({
  setFocus,
  todo,
  setTodo,
  handleAdd,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full max-w-[550px] md:max-w-full md:w-[550px] flex items-center mt-4 relative z-[3]"
    >
      <input
        type="text"
        className="w-full bg-white rounded-md p-3 text-black outline-none"
        placeholder="Enter a task"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={todo}
        onChange={(e) => {
          setFocus(true);
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="px-5 py-2 absolute top-1 right-1 bg-[#2f74c0] hover:bg-[#60a5fa] rounded-md font-bold active:scale-[.8] transition-all duration-300"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
