import Header from "../other/Header";
import TaskList from "../other/TaskList";
import TaskStatistics from "../other/TaskStatistics";

const EmployeeDashboard = () => {
  const role = "Employee";
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <Header role={role} />
      <TaskStatistics />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
