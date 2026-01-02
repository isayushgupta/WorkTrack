export const setSession = user =>
    localStorage.setItem("ems_user", JSON.stringify(user));

export const getSession = () =>
    JSON.parse(localStorage.getItem("ems_user"));

export const clearSession = () =>
    localStorage.removeItem("ems_user");
