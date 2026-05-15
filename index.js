const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({
    origin: "https://vite-react-app-h8l2.onrender.com",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));

app.options("*", cors());

app.use(express.json());

// MongoDB Connection
mongoose.connect(
    "mongodb+srv://juliannamarizmarquez:Julianna20@expressnodeapp.qcqpb5c.mongodb.net/"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.error("MongoDB Error:", error.message);
});

// Import API folder
const submitTalentForm = require("./API/submit");

// Use API
app.use("/submit", submitTalentForm);

// Routes
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
                    margin: 0;
                    padding: 0;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: linear-gradient(135deg, #fff5f7 0%, #fce4ec 100%);
                }

                .card {
                    background: white;
                    padding: 3rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(255, 182, 193, 0.3);
                    text-align: center;
                    border: 2px solid #f8bbd0;
                }

                h1 {
                    color: #ec407a;
                    margin: 0;
                    font-size: 2.5rem;
                    letter-spacing: -1px;
                }

                p {
                    color: #880e4f;
                    font-weight: 500;
                    margin-top: 10px;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>Server is Running</h1>
                <p>by: Julianna Mariz Marquez</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});