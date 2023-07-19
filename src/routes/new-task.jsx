import { Form } from 'react-router-dom';

export default function NewTask() {
  return (
    <div>
      <h3>New Task</h3>
      <Form method="post">
        <p>
          <span>Name </span>
          <input placeholder="Name" aria-label="Name" type="text" name="name" />
        </p>
        <p>
          <span>Description </span>
          <input
            placeholder="Description"
            aria-label="Description"
            type="text"
            name="description"
          />
        </p>
        <button type="submit">+ New</button>
      </Form>
    </div>
  );
}
