/* eslint-disable react/prop-types */
import { useDispatch} from "react-redux";
import { toggleCheckbox } from "../Utils/inputSlice"

function ToggleCheckbox({id,check}) {
    console.log(check)
    const dispatch = useDispatch();
    const handleClick =()=>{
        dispatch(toggleCheckbox(id));
        !check ? alert("Task Completed") : " ";
    }
  return (
    <div>
      <input type="checkbox" onClick={handleClick}/>
    </div>
  )
}

export default ToggleCheckbox
