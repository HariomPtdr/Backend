const express = require ("express")

const app = express()
app.get("/", (req, res) =>{
    res.send("Hello World")
})
app.get("/users", (req, res) => {
    res.status(200).json([
        { id: 1, name: "Hariom" },
        { id: 2, name: "Harman" }
    ])
})


app.listen(3000);