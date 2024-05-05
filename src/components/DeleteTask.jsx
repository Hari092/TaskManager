import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTask } from "../Utils/inputSlice";

// eslint-disable-next-line react/prop-types
function DeleteTask({ id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    alert("Task deleted");
    console.log("Task deleted", id);
    dispatch(removeTask(id));
  };
  return (
    <div>
      <MdOutlineDelete
        size={28}
        className=" cursor-pointer  bg-red-800 mt-[2px]"
        onClick={handleDelete}
      />
    </div>
  );
}

export default DeleteTask;
