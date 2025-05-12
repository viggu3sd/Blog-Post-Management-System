const User = require('../models/user');

exports.showRegisterForm = (req, res) => {
  res.render('auth/register');
};

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    
    if (existingUser) {
      req.flash('error', 'Username already exists');
      return res.redirect('/auth/register');
    }
    
    const user = new User({ username, password });
    await user.save();
    
    req.login(user, (err) => {
      if (err) return next(err);
      req.flash('success', 'Successfully registered and logged in!');
      res.redirect('/');
    });
  } catch (err) {
    next(err);
  }
};

exports.showLoginForm = (req, res) => {
  res.render('auth/login');
};

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'Successfully logged out');
  res.redirect('/');
};

// exports.register = async (req, res, next) => {
//   try {
//     const { username, password, isAdmin } = req.body; // Add isAdmin to destructuring
//     const existingUser = await User.findOne({ username });
    
//     if (existingUser) {
//       req.flash('error', 'Username already exists');
//       return res.redirect('/auth/register');
//     }
    
//     const user = new User({ 
//       username, 
//       password,
//       isAdmin: username === 'admin' // Or any other condition
//     });
    
//     await user.save();
//     // ... rest of the code
//   } catch (err) {
//     next(err);
//   }
// };