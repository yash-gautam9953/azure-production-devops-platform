const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        service: "azure-production-devops-platform",
        status: "running",
        version: "1.0.0"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

app.get("/ready", (req, res) => {
    res.status(200).json({
        status: "ready"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});