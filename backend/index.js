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

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "439ff4ac-1674-41a8-a7ed-de91ccc72131" } }
        );
        //depending on the previous, we return the following
        return res.status(r.status).json(r.data);
    } catch(e) {
        //this will return the error
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);