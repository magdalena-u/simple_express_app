'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var items = [];

router.post('/', function (req, res) {
  items.push(req.body.title);
  res.redirect('/');
});

router.get('/', function (req, res) {
  res.render(_path2.default.join(__dirname, '../', 'views', 'index'), { items: items });
});

module.exports = router;