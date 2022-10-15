const express = require("express");
const path = require("path");
let app = express();
const port = 3000;

app.use('/img', express.static('img'));
app.use('/stylesheets', express.static('stylesheets'));


app.get('/',(req,res)=>{
    console.log('index requested');
    res.sendFile('HomeLandingAbout/homepage.html', { root: __dirname });
    
})


app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});