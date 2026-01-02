import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

const AuthProvider = ({ children }) => {

    const [employees, setEmployees] = useState([]);
    const [admin, setAdmin] = useState(null);

    const recalc = tasks => ({
        newTask: tasks.filter(t => t.newTask).length,
        active: tasks.filter(t => t.active).length,
        completed: tasks.filter(t => t.completed).length,
        failed: tasks.filter(t => t.failed).length
    });

    useEffect(() => {
        const data = getLocalStorage();
        setEmployees(data.employees);
        setAdmin(data.admin);
    }, []);

    const persist = updated => {
        setEmployees(updated);
        setLocalStorage(updated, admin);
    };

    const updateTask = (empId, taskId, patch) => {
        const updated = employees.map(emp => {
            if (emp.id !== empId) return emp;

            const tasks = emp.tasks.map(t =>
                t.id === taskId ? { ...t, ...patch } : t
            );

            return { ...emp, tasks, taskNumbers: recalc(tasks) };
        });

        persist(updated);
    };

    const acceptTask = (e, t) => updateTask(e, t, { newTask: false, active: true, completed: false, failed: false });
    const completeTask = (e, t) => updateTask(e, t, { newTask: false, active: false, completed: true, failed: false });
    const failTask = (e, t) => updateTask(e, t, { newTask: false, active: false, completed: false, failed: true });

    const createTask = (empId, task) => {
        const updated = employees.map(emp =>
            emp.id === empId
                ? { ...emp, tasks: [task, ...emp.tasks], taskNumbers: recalc([task, ...emp.tasks]) }
                : emp
        );
        persist(updated);
    };

    return (
        <AuthContext.Provider value={{ employees, admin, acceptTask, completeTask, failTask, createTask }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
