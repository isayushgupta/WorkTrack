import PropTypes from "prop-types";
import Header from "../Others/Header";
import TaskNumbers from "../Others/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogOut, data }) => {
  return (
    <div className="flex flex-col p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header handleLogOut={handleLogOut} data={data} />
      <TaskNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

EmployeeDashboard.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default EmployeeDashboard;
