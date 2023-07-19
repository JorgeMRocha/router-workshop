import { createTask } from './tasks';
import { redirect } from 'react-router-dom';

export async function newTaskAction({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const taskId = await createTask(updates);
  return redirect(`/tasks/${taskId}`);
}
