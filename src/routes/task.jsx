import { useLoaderData } from 'react-router-dom';
const Task = () => {
  const { task } = useLoaderData();
  return (
    <div>
      Task ID - {task.id}
      <p>{task.name}</p>
      <p>{task.description}</p>
      <p>{task.date.toString()}</p>
    </div>
  );
};

export default Task;
