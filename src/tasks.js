let tasks = [
  { id: 1, name: 'Task 1', description: 'Do Task 1', date: new Date() },
  { id: 2, name: 'Task 2', description: 'Do Task 2', date: new Date() },
  { id: 3, name: 'Task 3', description: 'Do Task 3', date: new Date() }
];

export async function getTasks() {
  await fakeNetwork();
  const Tasks = tasks;
  return Tasks;
}

export async function getTask(id) {
  await fakeNetwork();
  const Tasks = tasks;
  const Task = Tasks.find((Task) => Task.id === Number(id));
  return Task ?? null;
}

export async function createTask(params) {
  await fakeNetwork();
  const Tasks = await getTasks();
  const Task = {
    id: Tasks[Tasks.length - 1].id + 1,
    date: Date.now(),
    ...params
  };
  Tasks.push(Task);
  tasks = Tasks;
  return Task.id;
}

async function fakeNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
