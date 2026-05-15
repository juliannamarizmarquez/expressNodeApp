// const dns = require("dns");
// dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
require("dotenv").config(); // Load environment variables

const app = express();
const server = http.createServer(app);

// Middleware
// 1. Middlewares first
app.use(cors({
  origin: "https://vite-react-app-h8l2.onrender.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// 2. Routes second
app.use("/submit", submitTalentForm);

// MongoDB Connection 
// Use process.env.MONGO_URI for security, or keep your string for now
const mongoURI = process.env.MONGO_URI || "mongodb+srv://juliannamarizmarquez:Julianna20@expressnodeapp.qcqpb5c.mongodb.net/talentDB";

mongoose.connect(mongoURI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.error("MongoDB Error:", error.message);
});

// Import API folder
const submitTalentForm = require("./API/submit");

// Use API
app.use("/submit", submitTalentForm);

// Status Route
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server Status</title>
            <style>
                body {
                    margin: 0; padding: 0;
                    font-family: 'Segoe UI', sans-serif;
                    display: flex; justify-content: center; align-items: center;
                    height: 100vh;
                    background: linear-gradient(135deg, #fff5f7 0%, #fce4ec 100%);
                }
                .card {
                    background: white; padding: 3rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(255, 182, 193, 0.3);
                    text-align: center;
                    border: 2px solid #f8bbd0;
                }
                h1 { color: #ec407a; margin: 0; font-size: 2.5rem; }
                p { color: #880e4f; font-weight: 500; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Server is Live</h1>
                <p>Status: Healthy</p>
                <p>Project by: Julianna Mariz Marquez</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
// Added "0.0.0.0" to help Render's network find the service
const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});