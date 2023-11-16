const express = require("express"); //runs http server
const cors = require("cors"); //allows one to call the server from any other origin

//the aforementioned is done in the following lines of code
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

/**
 * takes username from the request body and returns a fake user with a username and a password
 */
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);