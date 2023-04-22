const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Task = require('./taskmanager');
const store = require('./server');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// GET all tasks
app.get('/tasks', (req, res) => {
  const tasks = store.getAllTasks();
  res.json(tasks).status(200);
});

// GET a single task by ID
app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = store.getTaskById(id);
  if (!task) {
    return res.status(404).json({ error: 'Task does not exist' });
  }
  res.json(task);
});

//POST
app.post('/tasks', (req, res) => {
  const taskData = req.body;
  if (!taskData.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = store.createTask(taskData);
  res.json(task);
});

//PUT
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskData = req.body;
  const task = store.updateTask(id, taskData);
  if (!task) {
    return res.status(404).json({ error: 'Task does not exist ' });
  }
  res.json(task);
});

//DELETE 
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = store.deleteTask(id);
  if (!task) {
    return res.status(404).json({ error: 'Task does not exist' });
  }
  res.json(task);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});






















