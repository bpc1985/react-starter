import Express from 'express';
import wrap from 'express-async-wrap'; // can use async, await

const Router = new Express.Router();

const tasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Desc task 1',
    category: '1',
    created_at: '2017-01-01',
    last_edited_at: '2017-01-01'
  },{
    id: '2',
    title: 'Task 2',
    description: 'Desc task 2',
    category: '1',
    created_at: '2017-01-05',
    last_edited_at: '2017-01-05'
  },{
    id: '3',
    title: 'Task 3',
    description: 'Desc task 3',
    category: '2',
    created_at: '2017-01-02',
    last_edited_at: '2017-01-02'
  },{
    id: '4',
    title: 'Task 4',
    description: 'Desc task 4',
    category: '2',
    created_at: '2017-01-03',
    last_edited_at: '2017-01-03'
  },
];

export default [
  // See in /app/redux/modules/tasks/tasks.js
  Router.get('/api/tasks', wrap(async function(req, res) {
    res.json({
      tasks: tasks,
    });
  })),
  Router.get('/api/tasks/:id', wrap(async function(req, res) {
    const { id  } = req.params;
    res.json({
      tasks: tasks.filter((v) => v.id === id),
    });
  })),
];
