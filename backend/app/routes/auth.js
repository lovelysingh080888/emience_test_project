const express = require('express');
const router = express.Router();
const AuthControler = require('../controllers/Auth.controller')
router.post('/login', AuthControler.login);
router.post('/signup', AuthControler.register);

module.exports = router;
