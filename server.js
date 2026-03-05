const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/comments", (req, res) => {
    const comments = JSON.parse(fs.readFileSync("comments.json"));
    res.json(comments);
});

app.post("/comments", (req, res) => {
    const { name, text } = req.body;

    const comments = JSON.parse(fs.readFileSync("comments.json"));
    comments.push({ name, text });

    fs.writeFileSync("comments.json", JSON.stringify(comments, null, 2));

    res.json({ status: "ok" });
});

app.listen(3000, () => {
    console.log("Server ishlayapti: http://localhost:3000");
});