const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

router.get('/', isAuthenticated, isAdmin, adminController.showAdminPanel);
router.get('/users', isAuthenticated, isAdmin, adminController.listUsers);
router.get('/posts', isAuthenticated, isAdmin, adminController.listPosts);
router.delete('/posts/:id', isAuthenticated, isAdmin, adminController.deletePost);

module.exports = router;