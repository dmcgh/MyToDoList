/* eslint-disable new-cap */

import ViewTask from '../models/viewtask';
import Priority from '../models/priority';
import Category from '../models/category';
import express from 'express';
import Task from '../models/task';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Task.find((err, tasks) => {
    const priorities = Priority.find();
    const viewTasks = tasks.map(t => new ViewTask(t, priorities));
    res.render('tasks/index', { viewTasks });
  });
});

router.get('/new', (req, res) => {
  const priorities = Priority.find();
  const categories = Category.find();
  res.render('tasks/new', { priorities, categories });
});

router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save(() => {
    res.redirect('/tasks');
  });
});

router.post('/:id/complete', (req, res) => {
  res.redirect('/tasks');
});

router.post('/:id', (req, res) => {
  res.redirect('/tasks');
});

router.post('/:id/delete', (req, res) => {
  res.redirect('/tasks');
});

router.post('/:id/edit', (req, res) => {
  res.redirect('tasks/new');
});
