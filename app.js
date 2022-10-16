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

//EDIT PROFILLING
app.get('/Registration&Profiling/edit_profiling.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/edit_profiling.html', { root: __dirname });
})

//LOGIN REG
app.get('/Registration&Profiling/login_reg.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/login_reg.html', { root: __dirname });
})

//LOGIN
app.get('/Registration&Profiling/login.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/login.html', { root: __dirname });
})

//PROFILE
app.get('/Registration&Profiling/profile.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/profile.html', { root: __dirname });
})

//PROFILING
app.get('/Registration&Profiling/profiling.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Registration&Profiling/profiling.html', { root: __dirname });
})

// HEALTH IS WEALTH
app.get('/HealthIsWealth/health_is_wealth.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth/health_is_wealth.html', { root: __dirname });
})

// MENTAL HEALTH - BREATHING
app.get('/HealthIsWealth/Mental_Health/breathing.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Mental_Health/breathing.html', { root: __dirname });
})

// MENTAL HEALTH - JOURNALLING
app.get('/HealthIsWealth/Mental_Health/journalling.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Mental_Health/journalling.html', { root: __dirname });
})

// MENTAL HEALTH - LANDING
app.get('/HealthIsWealth/Mental_Health/mental_health_landing.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Mental_Health/mental_health_landing.html', { root: __dirname });
})

// PHYSICAL HEALTH - CATEGORIES
app.get('/HealthIsWealth/Physical_Health/categories.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Physical_Health/categories.html', { root: __dirname });
})

// PHYSICAL HEALTH - PLACES
app.get('/HealthIsWealth/Physical_Health/physical_health_places.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Physical_Health/physical_health_places.html', { root: __dirname });
})

// MENTAL HEALTH - PLACES
app.get('/HealthIsWealth/Physical_Health/mental_health_places.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/HealthIsWealth//Physical_Health/mental_health_places.html', { root: __dirname });
})




// GUIDE LANDING
app.get('/Guides/guides.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Guides/guides.html', { root: __dirname });
})

// GUIDE GENERIC, BY CATEGORY
app.get('/Guides/guide_category.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Guides/guide_category.html', { root: __dirname });
})





// SOCIAL+ 
app.get('/Social/social_plus.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('Social/social_plus.html', { root: __dirname });
})

//SOCIAL+ FORUM
app.get('/Social/Forum/forum.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Social/Forum/forum.html', { root: __dirname });
})

//SOCIAL+ ACTIVITIES
app.get('/Social/Activities/activities_landing.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Social/Activities/activities_landing.html', { root: __dirname });
})


app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});