var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wad2g9:flannelgang@cluster0.dxjblb1.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
 
   dbo.collection("guides").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();

    
  });
  
});