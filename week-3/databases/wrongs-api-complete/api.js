const express = require("express");
const cors = require("cors");
const db = require("./db");

const api = express();

// Add standard middleware
api.use(express.json());
api.use(cors());

// Api routes

api.get("/", (req, res) => res.send("The Wrongs API: track injustice."));

api.get("/wrongs", async (req, res) => {

    const data = await db.query("SELECT * FROM wrong");
    res.send(data.rows);
});

api.get("/people/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    // Insert parameters securely
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id]);

    res.send(data.rows[0]);
});

module.exports = api;