import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

function App() {
  const [user, setUser] = useState(null); // Start with null instead of empty array
  const data = useContext(AuthContext);

  useEffect(() => {
    if (data) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser).role);
        console.log(loggedInUser);
      }
    }
  }, [data]);

  const handleLogin = (email, password) => {
    // Check if the admin credentials are correct
    if (
      data?.admin &&
      email === data.admin[0].email &&
      password === data.admin[0].password
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }
    // Check if the employee credentials are correct
    else if (
      data?.employees &&
      data.employees.find((e) => e.email === email && e.password === password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    }
    // If credentials are invalid
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;
