const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Azure Production DevOps Platform</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            min-height: 100vh;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            padding: 40px 20px;
        }

        header {
            margin-bottom: 40px;
        }

        .badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            background: #064e3b;
            color: #6ee7b7;
            font-size: 13px;
            margin-bottom: 15px;
        }

        h1 {
            font-size: 38px;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #94a3b8;
            font-size: 17px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }

        .card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 14px;
            padding: 24px;
        }

        .card h3 {
            color: #94a3b8;
            font-size: 14px;
            margin-bottom: 12px;
            text-transform: uppercase;
        }

        .value {
            font-size: 24px;
            font-weight: bold;
        }

        .status {
            color: #4ade80;
        }

        .pipeline {
            margin-top: 30px;
        }

        .pipeline h2 {
            margin-bottom: 20px;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 12px;
        }

        .step {
            background: #1e293b;
            border: 1px solid #334155;
            padding: 18px;
            border-radius: 10px;
            text-align: center;
        }

        .step span {
            display: block;
            font-size: 28px;
            margin-bottom: 8px;
        }

        footer {
            margin-top: 40px;
            color: #64748b;
            font-size: 14px;
        }
    </style>
</head>

<body>

<div class="container">

    <header>
        <div class="badge">● SYSTEM ONLINE</div>

        <h1>Azure Production DevOps Platform</h1>

        <p class="subtitle">
            Containerized application deployed through an automated DevOps pipeline.
        </p>
    </header>

    <div class="grid">

        <div class="card">
            <h3>Application</h3>
            <div class="value">AzureOps App</div>
        </div>

        <div class="card">
            <h3>Status</h3>
            <div class="value status">● Running</div>
        </div>

        <div class="card">
            <h3>Version</h3>
            <div class="value">1.0.0</div>
        </div>

        <div class="card">
            <h3>Runtime</h3>
            <div class="value">Node.js</div>
        </div>

    </div>

    <div class="pipeline">

        <h2>Deployment Pipeline</h2>

        <div class="steps">

            <div class="step">
                <span>📦</span>
                Git Push
            </div>

            <div class="step">
                <span>🧪</span>
                Tests
            </div>

            <div class="step">
                <span>🐳</span>
                Docker Build
            </div>

            <div class="step">
                <span>🔒</span>
                Trivy Scan
            </div>

            <div class="step">
                <span>📤</span>
                Push to GHCR
            </div>

            <div class="step">
                <span>☁️</span>
                Azure VM
            </div>

        </div>

    </div>

    <footer>
        Azure Production DevOps Platform · Automated CI/CD
    </footer>

</div>

</body>
</html>
    `);
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