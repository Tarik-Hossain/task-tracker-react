const task = [
  {
    id: 1,
    text: "Doctor Appoinment",
    day: "Mar 10 at 5:00 PM",
    reminder: true,
  },
  {
    id: 2,
    text: "Team Meeting",
    day: "Mar 10 at 11:00 AM",
    reminder: true,
  },
  {
    id: 3,
    text: "Meeting at Client",
    day: "Mar 10 at 3:00 PM",
    reminder: false,
  },
  {
    id: 4,
    text: "Meet Cousine",
    day: "Mar 10 at 8:00 PM",
    reminder: true,
  },
  {
    id: 5,
    text: "Call Home",
    day: "Mar 10 at 9:00 PM",
    reminder: false,
  },
];
const Tasks = () => {
  return (
    <>
      {task.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
