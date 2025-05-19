##middleware auth.js

const Post = require('../models/post');

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  req.flash('error', 'Please log in to access this page');
  res.redirect('/auth/login');
};

exports.isPostAuthor = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      req.flash('error', 'Post not found');
      return res.redirect('/');
    }
    
    if (req.user._id.equals(post.createdBy) || req.user.isAdmin) {
      return next();
    }
    
    req.flash('error', 'You are not authorized to perform this action');
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.isAdmin) return next();
  req.flash('error', 'Admin access required');
  res.redirect('/');
};
