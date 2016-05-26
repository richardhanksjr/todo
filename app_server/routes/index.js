var express = require('express');
var router = express.Router();
var controller = require('../controllers/main');
//var sql = require('../controllers/main/mySQL')

router.get('/', controller.index);
router.get('/about', controller.about);
router.post('/contactForm', controller.contactForm);
router.get('/contact', controller.contact);
router.post('/deleteTask', controller.deleteTask);
router.post('/updateTask', controller.updateTask);

module.exports = router;