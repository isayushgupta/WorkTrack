import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AcceptedTask = ({ task, empId }) => {
    const { completeTask, failTask } = useContext(AuthContext);

    return (
        <div className="h-fit bg-[rgb(234,179,8,0.9)] shrink-0 w-[300px] rounded-xl p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-500 text-xs rounded-lg px-2 py-1">{task.priority}</h3>
                <h4 className="text-sm">{task.date}</h4>
            </div>

            <h2 className="mt-2 min-h-16 text-2xl font-semibold">{task.title}</h2>

            <p className="taskDescription min-h-28  overflow-y-clip mt-2">
                {task.description}
            </p>

            <div className="flex gap-5 justify-between mt-2">
                <button
                    onClick={() => completeTask(empId, task.id)}
                    className="bg-green-700 hover:bg-green-600 active:bg-green-500 rounded-lg py-1 px-4 text-sm"
                >
                    Mark completed
                </button>

                <button
                    onClick={() => failTask(empId, task.id)}
                    className="bg-red-600 py-1 active:bg-red-700 rounded-lg px-4 text-sm"
                >
                    Mark failed
                </button>
            </div>
        </div>
    );
};

export default AcceptedTask;
