import React from "react";
import AcceptedTask from "./AcceptedTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="h-[55%] py-5 w-full mt-14 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto scroll"
    >
      {data.tasks.map(task => {

        if (task.active) {
          return <AcceptedTask key={task.id} task={task} empId={data.id} />;
        }

        if (task.completed) {
          return <CompletedTask key={task.id} task={task} empId={data.id} />;
        }

        if (task.newTask) {
          return <NewTask key={task.id} task={task} empId={data.id} />;
        }

        return <FailedTask key={task.id} task={task} empId={data.id} />;
      })}

    </div>
  );
};

export default TaskList;
