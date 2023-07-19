import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Task from './routes/task';
import ErrorPage from './routes/error-page';
import NewTask from './routes/new-task';
import { tasksLoader, taskLoader } from './loaders';
import { newTaskAction } from './actions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: tasksLoader,
    errorElement: <ErrorPage />,
    children: [
      { path: 'tasks/:taskId', element: <Task />, loader: taskLoader },
      { path: 'tasks/new', element: <NewTask />, action: newTaskAction },
      {
        index: true,
        element: <p>This is a fallback index page, click a task to see it!</p>
      }
    ]
  },
  {
    path: '/test',
    element: 'This is a test'
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
