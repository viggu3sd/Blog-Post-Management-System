const express = require('express');
const router = express.Router();
const { validate, schemas } = require('../middleware/validator');
const { isAuthenticated, isPostAuthor } = require('../middleware/auth');
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/new', isAuthenticated, postController.showCreateForm);
router.post('/', isAuthenticated, validate(schemas.postSchema), postController.create);
router.get('/:id', postController.show);
router.get('/:id/edit', isAuthenticated, isPostAuthor, postController.showEditForm);
router.put('/:id', isAuthenticated, isPostAuthor, validate(schemas.postSchema), postController.update);
router.delete('/:id', isAuthenticated, isPostAuthor, postController.delete);

module.exports = router;