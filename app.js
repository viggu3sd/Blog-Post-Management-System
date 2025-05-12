require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const path = require('path');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const createError = require('http-errors');
const adminRouter = require('./routes/admin');

const app = express();

// Database connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_URI }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// Passport initialization

const configurePassport = require('./config/passport');

// After session middleware
configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// Flash messages
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.messages = req.flash();
  next();
});

// View engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/posts', require('./routes/posts'));
app.use('/admin', adminRouter);


// 404 handler
app.use((req, res, next) => {
  next(createError(404, 'Page Not Found'));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', {
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

