import { Outlet, useLoaderData, Link } from 'react-router-dom';

export default function Root() {
  const { tasks } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>Tasks</h1>
        <nav>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Link to={`/tasks/${task.id}`}>{task.name}</Link>
              </li>
            ))}
            <li>
              <Link to={`/tasks/new`}>+ Add</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
