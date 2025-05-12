const express = require('express');
const router = express.Router();
const passport = require('passport');
const { validate, schemas } = require('../middleware/validator');
const authController = require('../controllers/authController');

router.get('/register', authController.showRegisterForm);
router.post('/register', validate(schemas.registerSchema), authController.register);
router.get('/login', authController.showLoginForm);
router.post('/login', validate(schemas.loginSchema), 
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);
router.get('/logout', authController.logout);

module.exports = router;