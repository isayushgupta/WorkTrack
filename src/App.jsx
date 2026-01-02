import { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthContext";
import { getSession, setSession, clearSession } from "./utils/session";

const App = () => {
  const { employees, admin } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = getSession();
    if (session) setUser(session);
  }, []);

  const handleLogin = (email, password) => {
    if (admin?.email === email && admin?.password === password) {
      const session = { role: "admin" };
      setSession(session);
      setUser(session);
      return;
    }

    const employee = employees.find(
      e => e.email === email && e.password === password
    );

    if (!employee) return alert("Invalid credentials");

    const session = { role: "employee", id: employee.id };
    setSession(session);
    setUser(session);
  };

  const handleLogOut = () => {
    clearSession();
    setUser(null);
    window.location.href = "/";
  };


  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/admin"
        element={<AdminDashboard handleLogOut={handleLogOut} />}
      />
      <Route
        path="/employee"
        element={
          <EmployeeDashboard
            handleLogOut={handleLogOut}
            data={employees.find(e => e.id === user.id)}
          />
        }
      />
      <Route
        path="*"
        element={<Navigate to={user.role === "admin" ? "/admin" : "/employee"} />}
      />
    </Routes>
  );
};

export default App;
