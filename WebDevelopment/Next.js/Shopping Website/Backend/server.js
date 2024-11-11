// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection failed:', error.message));


app.use('/auth', require('./routes/auth'));
app.use('/products', require('./routes/product'));
app.use('/cart', require('./routes/cart'));
app.use('/admin', require('./routes/admin'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
