import { useSelector } from "react-redux";
import DeleteTask from "./DeleteTask";
import ToggleCheckbox from "./ToggleCheckbox";

function SetTask() {
  const selector = useSelector((store) => store.task.tasks);

  console.log(selector);

  return selector?.length > 0 ? (
    selector?.map((t, i) => (
      <div
        key={t.id}
        className="bg-black  flex md:w-[35rem] my-1 rounded-md text-white justify-between px-3 w-72"
      >
        <div className="flex gap-2  p-2">
          <p>task:{i + 1}</p>
          <ToggleCheckbox id={t.id} check={t.checked}/>
          { !t.checked ? <h1>{t.task}</h1> : <h1 className=" line-through bg-slate-600">{t.task}</h1>}
        </div>
        <div className="flex gap-2 pt-1">
            <DeleteTask id={t.id}/>
        </div>
      </div>
    ))
  ) : (
    <h1 className="text-center text-3xl font-extrabold my-16">
      Add Tasks to View
    </h1>
  );
}

export default SetTask;
