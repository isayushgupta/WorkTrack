import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  const allTasks = employees
    .flatMap(emp =>
      emp.tasks.map(task => ({
        ...task,
        employeeName: emp.firstName
      }))
    )
    .sort((a, b) => b.id - a.id);   // newest first

  return (
    <div
      id="CreateTask"
      className="bg-[#1c1c1c] p-5 rounded-lg mt-8 h-52 overflow-auto"
    >
      {allTasks.length === 0 && (
        <p className="text-gray-400 text-center">No tasks assigned yet</p>
      )}

      {allTasks.map(task => (
        <div
          key={task.id}
          className={`mb-2 px-4 py-2 rounded flex justify-between ${task.completed
              ? "bg-green-500"
              : task.failed
                ? "bg-red-500"
                : task.active
                  ? "bg-yellow-400"
                  : "bg-blue-500"
            }`}
        >
          <h2>{task.employeeName}</h2>
          <h3>{task.title}</h3>
          <h5>
            {task.completed
              ? "Completed"
              : task.failed
                ? "Failed"
                : task.active
                  ? "Accepted"
                  : "New"}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
