import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = ({ handleLogOut }) => {
    return (
        <div className="h-fit w-full p-10">
            <Header handleLogOut={handleLogOut} data={{ firstName: "Admin" }} />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
