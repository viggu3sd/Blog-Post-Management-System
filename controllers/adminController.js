const User = require('../models/user');
const Post = require('../models/post');

exports.showAdminPanel = (req, res) => {
  res.render('admin/panel');
};

exports.listUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.render('admin/users', { users });
  } catch (err) {
    next(err);
  }
};

exports.listPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate('createdBy', 'username')
      .sort({ createdAt: -1 });
    res.render('admin/posts', { posts });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    req.flash('success', 'Post deleted successfully');
    res.redirect('/admin/posts');
  } catch (err) {
    next(err);
  }
};