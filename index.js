const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);

// Import API
const submitTalentForm = require("./API/submit");

// Middleware
app.use(cors({
    origin: "https://vite-react-app-h8l2.onrender.com",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Routes
app.use("/submit", submitTalentForm);

app.get("/", (req, res) => {
    res.send("Server is Running");
});

// MongoDB Connection
mongoose.connect(
    "mongodb+srv://juliannamarizmarquez:Julianna20@expressnodeapp.qcqpb5c.mongodb.net/talentDB"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.error("MongoDB Error:", error.message);
});

// Start server
const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});