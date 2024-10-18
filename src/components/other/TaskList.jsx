import TaskItem from "./TaskItem";

const TaskList = () => {
  // Array of task objects
  const tasks = [
    {
      priority: "High",
      date: "20 Feb 2024",
      title: "Make a YouTube video",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero quisquam.",
      bgColor: "bg-red-500",
      priorityColor: "bg-red-700",
    },
    {
      priority: "Medium",
      date: "18 Feb 2024",
      title: "Write a blog post",
      description:
        "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      bgColor: "bg-yellow-500",
      priorityColor: "bg-yellow-700",
    },
    {
      priority: "Low",
      date: "15 Feb 2024",
      title: "Design new logo",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
      bgColor: "bg-blue-500",
      priorityColor: "bg-blue-700",
    },
    {
      priority: "High",
      date: "12 Feb 2024",
      title: "Plan marketing strategy",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
      bgColor: "bg-green-500",
      priorityColor: "bg-green-700",
    },
    {
      priority: "Low",
      date: "10 Feb 2024",
      title: "Organize team meeting",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      bgColor: "bg-purple-500",
      priorityColor: "bg-purple-700",
    },
    {
      priority: "Medium",
      date: "8 Feb 2024",
      title: "Update portfolio",
      description:
        "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.",
      bgColor: "bg-pink-500",
      priorityColor: "bg-pink-700",
    },
    {
      priority: "High",
      date: "5 Feb 2024",
      title: "Record a podcast episode",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
      bgColor: "bg-orange-500",
      priorityColor: "bg-orange-700",
    },
  ];

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex space-x-4">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            priority={task.priority}
            date={task.date}
            title={task.title}
            description={task.description}
            bgColor={task.bgColor}
            priorityColor={task.priorityColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
