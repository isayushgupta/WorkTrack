import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NewTask = ({ task, empId }) => {
  const { acceptTask } = useContext(AuthContext);

  return (
    <div className="h-fit bg-sky-600 shrink-0 w-[300px] rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-sky-800 text-xs rounded-lg px-2 py-1">{task.priority}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>

      <h2 className="mt-2 min-h-16 text-2xl font-semibold">{task.title}</h2>
      <p className="min-h-28 overflow-y-clip mt-2">{task.description}</p>

      <button
        onClick={() => acceptTask(empId, task.id)}
        className="w-full mt-2 bg-sky-800 hover:bg-sky-700 active:bg-sky-600 rounded-lg py-1 px-2 text-sm "
      >
        Accept
      </button>
    </div>
  );
};

export default NewTask;
