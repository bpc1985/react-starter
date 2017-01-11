import Express from 'express';
import wrap from 'express-async-wrap'; // can use async, await

const Router = new Express.Router();

const quotes = [
  {
    id: '1',
    description: 'The most wasted day of all is that on which we have not laughed.',
    category: '1',
    created_at: '2017-01-01',
    last_edited_at: '2017-01-01'
  },
  {
    id: '2',
    description: 'Love you will find only where you may show yourself weak without provoking strength.',
    category: '1',
    created_at: '2017-01-05',
    last_edited_at: '2017-01-05'
  },
  {
    id: '3',
    description: 'I have never seen snow and do not know what winter means.',
    category: '2',
    created_at: '2017-01-02',
    last_edited_at: '2017-01-02'
  },
  {
    id: '4',
    description: 'I look for what needs to be done. After all, that\'s how the universe designs itself.',
    category: '2',
    created_at: '2017-01-03',
    last_edited_at: '2017-01-03'
  },
];

export default [
  // See in /app/redux/modules/quotes/quotes.js
  Router.get('/api/quotes', wrap(async function(req, res) {
    res.json({
      quotes: quotes,
    });
  })),
  Router.get('/api/quotes/:id', wrap(async function(req, res) {
    const { id  } = req.params;
    res.json({
      quotes: quotes.filter((v) => v.id === id),
    });
  })),
];
