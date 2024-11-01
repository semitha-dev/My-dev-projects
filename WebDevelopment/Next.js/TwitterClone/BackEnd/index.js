const express = require('express');
const cors = require('cors'); 
const http = require('http');
const connectDB = require('./db'); 
const Message = require('./models/newpostmodel'); 
const userSignUp = require('./models/usersignup'); 
const session = require('express-session');
const userdetail = require('./models/usersignup'); 
connectDB(); // Connects to MongoDB

const app = express();
app.use(cors()); 
app.use(express.json());

// Session configuration
app.use(session({
  secret: 'GigaNiga',
  resave: false,
  saveUninitialized: false,    
  cookie: {
    secure: false,   
    maxAge: 60000 * 60 * 24 // 1 day
  }
}));

// Route to add a post
app.post('/addPost', async (req, res) => {
  try {
    const { content, username } = req.body;  // Extract content and username
    const newMessage = new Message({ content, username });  // Include username
    await newMessage.save();
    res.status(201).send('Post added');
  } catch (error) {
    console.error('Error saving message:', error); 
    res.status(500).send('Error saving message');
  }
});

// Route to retrieve posts
app.get('/getPosts', async (req, res) => { 
  try {
    const messages = await Message.find();
    res.send(messages);
  } catch (error) {
    console.error('Error fetching messages:', error); 
    res.status(500).send('Error fetching messages');
  }
});

// Route for user signup
app.post('/userSignUp', async (req, res) => {
  const { Name, password } = req.body;
  try {
    const user = new userSignUp({ Name, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Error during signup');
  }
});

// Route for user login
app.post('/userLogin', async (req, res) => {
  const { Name, password } = req.body; 
  try {
    const user = await userdetail.findOne({ Name }); 

    // Check if user exists and password matches
    if (user && user.password === password) {
      req.session.user = { id: user._id, username: user.Name };

      // Save session to ensure immediate persistence
      req.session.save((err) => {
        if (err) {
          console.error('Session save error:', err);
          return res.status(500).json({ log: false, message: 'Server error during login' });
        }
        return res.json({ log: true, message: 'Login successful!' });
      });
    } else {
      return res.status(401).json({ log: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ log: false, message: 'Server error during login' });
  }
});

// Route to check if user is logged in
app.get('/checklogin', async (req, res) => {
  try {
    if (req.session && req.session.user) {
      res.json({ loggedIn: true, username: req.session.user.username });
    } else {
      res.json({ loggedIn: false });
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    res.status(500).send('Error checking login status');
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
