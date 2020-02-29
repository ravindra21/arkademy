var express = require('express');
var router = express.Router();
var order = require('../controllers/orderController');

router.get('/', order.index);

router.get('/:id', order.read);

router.post('/', order.create);        

router.patch('/:id', order.update);

router.delete('/:id', order.delete);

module.exports = router;

