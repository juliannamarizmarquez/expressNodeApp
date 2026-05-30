const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Add this 
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) =>{
  res.send("server is running")
})


// MongoDB Connection
// MongoDB Connection
mongoose.connect("mongodb+srv://juliannamarizmarquez:Julianna20@expressnodeapp.qcqpb5c.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.error("MongoDB Error:", error.message);
  });

//Middleware
app.use(cors());
app.use(express.json());

// Import API folder
const submitTalentForm = require("./API/submit");

// Use API
app.use("/submit", submitTalentForm);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});