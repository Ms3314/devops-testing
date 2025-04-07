

import express from "express";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there");
})

app.post("/signup", async (req, res) => {
    res.json({
        message: "Signup successful",
        id: Math.random()*10
    });
})

app.listen(3002 , ()=>{
    console.log("Server is running on port 3002");
});
