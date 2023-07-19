import { getTask, getTasks } from './tasks';

export async function tasksLoader() {
  const tasks = await getTasks();
  return { tasks };
}

export async function taskLoader({ params }) {
  const task = await getTask(params.taskId);
  return { task };
}
