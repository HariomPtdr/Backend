const express = require("express")

const app = express()
// middleware 
app.use(express.json())

const notes = []
// post method to create the new resourse 
app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message : " Notes is created Sucessfully"
    })
})
// get method to retrive a resource 
app.get("/notes", (req, res) => {
    res.status(200).json({
        notes : notes
    })
})
// delete method to delete a resource
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]

    res.status(204).json({
        message : "Note is deleted successfully"
    })
})

// patch method to update a resource Updates a resource by partially modifying it.
// Requires only the modified fields in the request  body.

app.patch("/notes/:index", (req,res) => {
    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message : "Note is updated sucessfully"
    })
})

module.exports = app