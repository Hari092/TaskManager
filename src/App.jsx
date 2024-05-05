import SetTask from "./components/SetTask";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./Utils/inputSlice";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask(task);
    dispatch(
      addTask({
        task: task,
        id: Date.now(),
        checked: false,
      })
    );
    setTask(" ");
  };

  return (
    <div className=" bg-orange-100 md:h-dvh h-full  flex flex-col justify-start items-center">
      <h1 className=" font-extrabold text-4xl py-7 text-center">
        Task Manager
      </h1>
      <form
        className="flex text-center justify-center mb-3"
        type="submit"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Task"
          maxLength={50}
          className="md:w-96 block h-10 border-2  border-red-500 rounded-md px-4"
          value={task}
          onChange={handleChange}
          required
        />
        <button className="bg-red-500 text-white py-2 px-4 ms-2 rounded-md">
          <IoSend />
        </button>
      </form>
      <SetTask input={task} />
    </div>
  );
}

export default App;
