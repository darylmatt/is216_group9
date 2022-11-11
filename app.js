// INITIALIZING MONGODB CONNECTION 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wad2g9:flannelgang@cluster0.dxjblb1.mongodb.net/test";

// INITIALIZING WEB SERVER WITH NODE.JS, AND MIDDLEWARE FRAMEWORK EXPRESS FOR ROUTING
const express = require("express");
const path = require("path");
let app = express();
const port = 3000;

// ALLOWING WEB SERVER TO SERVE STATIC  (EG IMGS, JAVASCRIPT)
app.use('/img', express.static('img'));
app.use('/stylesheets', express.static('stylesheets'));
app.use('/scripts', express.static('scripts'));

app.get('/',(req,res)=>{
    console.log('index requested');
    res.sendFile('HomeLandingAbout/homepage.html', { root: __dirname });
})

app.get('/HomeLandingAbout/homepage.html',(req,res)=>{
  console.log('translating')
  // TRANSLATION TESTING
  var translated = ''
  const {Translate} = require('@google-cloud/translate').v2;
  require('dotenv').config();

  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  console.log(CREDENTIALS);

  const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
        translated = response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText("Hello ~ How can we help you today? ~ EDIT PROFILE ~ Upcoming activities ~ Social+ ~ Connect with fellow domestic helpers ~ POST A THREAD ~ Do an activity with a friend ~ Guides ~ Wellness",  'id')
     .then((translate) => {
         translated = translate;
         console.log('index requested');
         res.sendFile('/HomeLandingAbout/homepage.html', { root: __dirname });
         console.log(translated)
         res.set('translation', translated);

     })
     .catch((err) => {
         console.log(err);
     });

    /*
    console.log('index requested');
    res.sendFile('/HomeLandingAbout/homepage.html', { root: __dirname });
    console.log(translated)
    res.set('translation', translated);
    */  
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

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("facilities").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/HealthIsWealth/Physical_Health/physical_health_places.html', { root: __dirname });
      console.log(JSON.stringify(data));
      res.set('facilities', JSON.stringify(data) );
    })
    
  });

})

  

// MENTAL HEALTH - PLACES
app.get('/HealthIsWealth/Physical_Health/mental_health_places.html',(req,res)=>{
  console.log('index requested');
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("domesticaid");
    dbo.collection("facilities").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
  res.sendFile('/HealthIsWealth//Physical_Health/mental_health_places.html', { root: __dirname });
})




// GUIDE LANDING
app.get('/Guides/guides.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('/Guides/guides.html', { root: __dirname });
})

// GUIDE CARE
app.get('/Guides/guide_care.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("guides2").find().toArray();
    result.then(data => {
      //global threads = data;
      console.log(data);
      res.sendFile('/Guides/guide_care.html', { root: __dirname });
      res.set('guides', JSON.stringify(data) );

      
    })
    
  });

})

// GUIDE RIGHTS
app.get('/Guides/guide_rights.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("guides2").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/Guides/guide_rights.html', { root: __dirname });
      console.log(JSON.stringify(data));
      res.set('guides', JSON.stringify(data) );
    })
    
  });

})




// SOCIAL+ 
app.get('/Social/social_plus.html',(req,res)=>{
  console.log('index requested');
  res.sendFile('Social/social_plus.html', { root: __dirname });
})

//SOCIAL+ FORUM
app.get('/Social/Forum/forum.html',(req,res)=>{
  console.log('index requested');
  console.log('forum')

  // TRANSLATION TESTING
  const {Translate} = require('@google-cloud/translate').v2;
  require('dotenv').config();

  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  console.log(CREDENTIALS);

  const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

translateText('Translation testing', 'fil')
     .then((res) => {
         console.log(res);
     })
     .catch((err) => {
         console.log(err);
     });
  
    /**
 * TODO(developer): Uncomment the following line before running the sample.
 */
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("threads").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/Social/Forum/forum.html', { root: __dirname });
      res.set('threads', JSON.stringify(data) );

  
    })
    
  });
 
})

//SOCIAL+ ACTIVITIES

app.get('/Social/Activities/activities_landing.html',(req,res)=>{
  console.log('index requested');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("domesticaid");
    const result = dbo.collection("activities").find().toArray();
    result.then(data => {
      //global threads = data;
      res.sendFile('/Social/Activities/activities_landing.html', { root: __dirname });
      console.log(JSON.stringify(data));
      res.set('activities', JSON.stringify(data) );
    })
    
  });

})


app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});