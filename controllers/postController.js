const Post = require('../models/post');

exports.index = async (req, res, next) => {
  try {
    const { search } = req.query;
    let posts;
    
    if (search) {
      posts = await Post.find({ $text: { $search: search } })
        .populate('createdBy', 'username')
        .sort({ createdAt: -1 });
    } else {
      posts = await Post.find()
        .populate('createdBy', 'username')
        .sort({ createdAt: -1 });
    }
    
    res.render('posts/index', { posts, search });
  } catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('createdBy', 'username');
    if (!post) {
      req.flash('error', 'Post not found');
      return res.redirect('/');
    }
    res.render('posts/show', { post });
  } catch (err) {
    next(err);
  }
};

exports.showCreateForm = (req, res) => {
  res.render('posts/form', { post: null });
};

exports.create = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;
    
    // Convert tags to array and handle empty/undefined cases
    const tagsArray = typeof tags === 'string' 
      ? tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
      : [];
    
    const post = new Post({
      title,
      content,
      tags: tagsArray,
      createdBy: req.user._id
    });
    
    await post.save();
    req.flash('success', 'Post created successfully');
    res.redirect(`/posts/${post._id}`);
  } catch (err) {
    next(err);
  }
};

exports.showEditForm = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      req.flash('error', 'Post not found');
      return res.redirect('/');
    }
    res.render('posts/form', { post });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;
    
    // Convert tags to array and handle empty/undefined cases
    const tagsArray = typeof tags === 'string' 
      ? tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
      : [];
    
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        tags: tagsArray
      },
      { new: true }
    );
    
    req.flash('success', 'Post updated successfully');
    res.redirect(`/posts/${post._id}`);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    req.flash('success', 'Post deleted successfully');
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

exports.index = async (req, res, next) => {
  try {
    const { search } = req.query;
    let posts;
    
    if (search) {
      posts = await Post.find({
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
          { tags: { $regex: search, $options: 'i' } }
        ]
      })
      .populate('createdBy', 'username')
      .sort({ createdAt: -1 });
    } else {
      posts = await Post.find()
        .populate('createdBy', 'username')
        .sort({ createdAt: -1 });
    }
    
    res.render('posts/index', { posts, search });
  } catch (err) {
    next(err);
  }
};

exports.indexWithCreate = async (req, res, next) => {
  try {
    const { search } = req.query;
    let posts;
    
    if (search) {
      posts = await Post.find({
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
          { tags: { $regex: search, $options: 'i' } }
        ]
      })
      .populate('createdBy', 'username')
      .sort({ createdAt: -1 });
    } else {
      posts = await Post.find()
        .populate('createdBy', 'username')
        .sort({ createdAt: -1 });
    }
    
    res.render('index', { 
      posts, 
      search,
      showCreateForm: req.isAuthenticated() 
    });
  } catch (err) {
    next(err);
  }
};