// express dependency
const express = require('express');
// calls express 
 const app = express();

 const PORT = process.env.PORT || 3001;

// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))


app.get("/notes", (req, res) =>{
res.sendFile('public/notes.html')

});



//port listener
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
