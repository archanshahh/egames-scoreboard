require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;
const token = process.env.PANDASCORE_ACCESS_TOKEN;

app.get("/api/nalcs/regular/matches", (req, res) => {
    axios.get(`https://api.pandascore.co/lol/tournaments?filter[id]=1492&token=${token}`)
        .then((response)=>{
            res.send(response.data);
        })
        .catch((e) =>{
            res.send(e);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
