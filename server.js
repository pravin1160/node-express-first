const Task = require('./taskmanager');

let tasks = [];

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find(task => task.id === id);
}

function createTask(taskData) {
  const { title, description, completed } = taskData;
  const id = tasks.length + 1;
  const task = new Task(id, title, description, completed);
  tasks.push(task);
  return task;
}

function updateTask(id, taskData) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  const { title, description, completed } = taskData;
  const task = new Task(id, title, description, completed);
  tasks[taskIndex] = task;
  return task;
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return null;
  }
  const task = tasks[taskIndex];
  tasks.splice(taskIndex, 1);
  return task;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
