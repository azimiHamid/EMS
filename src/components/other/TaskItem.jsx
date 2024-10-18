const TaskItem = ({
  priority,
  date,
  title,
  description,
  bgColor,
  priorityColor,
}) => {
  return (
    <div
      className={`p-4 rounded-lg ${bgColor} text-white min-w-[250px] sm:min-w-[200px] md:min-w-[250px]`}
    >
      <div
        className={`text-sm font-bold px-2 py-1 rounded-md ${priorityColor} inline-block mb-2`}
      >
        {priority}
      </div>
      <p className="text-sm mb-1">{date}</p>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default TaskItem;
