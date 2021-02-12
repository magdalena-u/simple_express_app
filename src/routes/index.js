import path from 'path';
import express from 'express';

const router = express.Router();

const items = [];

router.post('/', (req, res) => {
  items.push(req.body.title)
  res.redirect('/')
})

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../', 'views', 'index'), { items: items });
});

module.exports = router;
