const CompletedTask = ({ task }) => {
  return (
    <div className="h-fit bg-green-700 shrink-0 w-[300px] rounded-xl p-5">
      <div className=" flex justify-between items-center">
        <h3 className="bg-green-900 text-xs rounded-lg px-2 py-1">{task.priority}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>

      <h2 className=" mt-2 text-2xl font-semibold min-h-16">{task.title}</h2>

      <p className="min-h-28  overflow-y-auto mt-2">{task.description}</p>

      <div className="flex justify-start mt-2">
        <span  className="bg-green-800 px-4 py-1 rounded-full text-sm font-semibold">
          Task Completed
        </span>
      </div>
    </div>
  );
};

export default CompletedTask;
