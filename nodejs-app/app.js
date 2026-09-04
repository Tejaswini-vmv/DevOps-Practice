const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from Node.js Docker!</h1>
        <h2>My Third Dockerized Application</h2>
        <p>Application: Node.js + Express</p>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
