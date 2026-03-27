const express = require("express")

const app = express()
// this os the middleware to read the req.body 
app.use(express.json())
// to store the notes notes name array is created 
const notes = []

// create a resource 

app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
// status code for the create the resource 
    res.status(201).json({
        message : "Note is created successfully"
    })
})
// retrive the resource 
app.get("/notes", (req, res) => {
    res.status(200).json({
        notes : notes
    })
})
// delete the resource 
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]

    res.status(204).json({
        message : "note is deleted successfully"
    })

})
// update the resource 
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message : "note is updated successfully"
    })
})


module.exports = app