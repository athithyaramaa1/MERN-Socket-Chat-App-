const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
dotenv.config();
const app = express();

// Connect to the database
connectDB()

// Middleware to parse JSON bodies
app.use(express.json());

// Route to check if API is running
app.get("/", (req, res) => {
  res.send("API running!");
});

app.use('/api/user', userRoutes)

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT,async () => {
  await connectDB();
  console.log(`Server started on port ${PORT}`);
});
