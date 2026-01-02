import React from "react";

const TaskNumbers = ({ data }) => {
  return (
    <div className="flex justify-between center gap-3 mt-16 w-[100%] mx-auto font-semibold">
      <div className="px-9 py-6 bg-sky-600 w-[40%] rounded-lg flex items-center gap-10">
        <img src="src/assets/totalTask.svg" className="invert h-14" alt="" />
        <span>
          <h2 className="text-4xl">{data.taskNumbers.newTask}</h2>
          <h3 className="text-2xl mt-3">New Task</h3>
        </span>
      </div>

      <div className="px-9 py-6 bg-green-600 w-[40%] rounded-lg flex items-center gap-10">
        <img src="src/assets/completedTask.svg" className="invert h-14" alt="" />
        <span>
          <h2 className="text-4xl">{data.taskNumbers.completed}</h2>
          <h3 className="text-2xl mt-3">Completed Task</h3>
        </span>
      </div>

      <div className="px-9 py-6 bg-yellow-500 w-[40%] rounded-lg flex items-center gap-10">
        <img src="src/assets/activeTask.svg" className="h-[62px]" alt="" />
        <span>
          <h2 className="text-4xl">{data.taskNumbers.active}</h2>
          <h3 className="text-2xl mt-3">Active Task</h3>
        </span>
      </div>

      <div className="px-9 py-6 bg-red-500 w-[40%] rounded-lg flex items-center gap-10">
        <img src="src/assets/failedTask.svg" className="invert h-14" alt="" />
        <span>
          <h2 className="text-4xl">{data.taskNumbers.failed}</h2>
          <h3 className="text-2xl mt-3">Failed Task</h3>
        </span>
      </div>
    </div>
  );
};

export default TaskNumbers;
