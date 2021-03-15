const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');

router.post('/user', userController.create);
router.delete('/user', userController.delete);

module.exports = router;