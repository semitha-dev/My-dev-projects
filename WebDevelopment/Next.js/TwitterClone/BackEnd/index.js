const express = require('express');
const cors = require('cors'); 
const http = require('http');
const connectDB = require('./db'); 
const Message = require('./models/newpostmodel'); 
const userSignUp = require('./models/usersignup'); 
const session = require('express-session');
const userdetail = require('./models/usersignup'); 
connectDB(); 

const app = express();
app.use(cors()); 
app.use(express.json());

app.use(session({
  secret: 'sf5584sf755sf7s',
  resave: false,
  saveUninitialized: false,    
  cookie: {
    secure: false,   
    maxAge: 60000 * 60 * 24 // 1 day
  }
}));

app.post('/addPost', async (req, res) => {
  try {
    const { content, username } = req.body;  
    const newMessage = new Message({ content, username });  
    await newMessage.save();
    res.status(201).send('Post added');
  } catch (error) {
    console.error('Error saving message:', error); 
    res.status(500).send('Error saving message');
  }
});

app.get('/getPosts', async (req, res) => { 
  try {
    const messages = await Message.find();
    res.send(messages);
  } catch (error) {
    console.error('Error fetching messages:', error); 
    res.status(500).send('Error fetching messages');
  }
});

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

app.post('/userLogin', async (req, res) => {
  const { Name, password } = req.body; 
  try {
    const user = await userdetail.findOne({ Name }); 

    if (user && user.password === password) {
      req.session.user = { id: user._id, username: user.Name };

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


app.get('/getSpecificPost/:id', async (req, res) => {
  try {
    const post = await Message.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ error: "Post doesn't exist!" });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching specific post:', error);
    res.status(500).send('Error fetching specific post');
  }
});
app.post('/addReply', async (req, res) => {
  const { postId, content, username } = req.body;
  try {
    const post = await Message.findById(postId);
    post.replies.push({ content, username });
    await post.save();
    res.status(201).send('Reply added');
  } catch (error) {
    console.error('Error adding reply:', error);
    res.status(500).send('Error adding reply');
  }
});

app.post('/getUsers', async (req, res) => {
  const {Name} = req.body;
  try{
    const user = await userdetail.findOne({Name});
    if(!user){
      res.status(404).send('User not found');
    }else{
      res.json(user);
    }
    
  }catch(error){
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
  

})
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
