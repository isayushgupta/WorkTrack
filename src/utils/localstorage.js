import employeesData from "../utils/employeesData.json";
import adminData from "../utils/adminData.json";

export const bootstrapStorage = () => {
    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees", JSON.stringify(employeesData.employees));
    }

    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(adminData.admin));
    }
};

export const getLocalStorage = () => {
    bootstrapStorage();

    return {
        employees: JSON.parse(localStorage.getItem("employees")),
        admin: JSON.parse(localStorage.getItem("admin"))
    };
};

export const setLocalStorage = (employees, admin) => {
    if (employees) localStorage.setItem("employees", JSON.stringify(employees));
    if (admin) localStorage.setItem("admin", JSON.stringify(admin));
};
