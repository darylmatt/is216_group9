var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://wad2g9:flannelgang@cluster0.dxjblb1.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("domesticaid");
  const facility = {
    id: "1",
    name: "Institute of Mental Health",
    category: "Mental",
    sub_category: "Counselling",
    type: "Government",
    postal: "539747",
    address: "10 Buangkok View, Buangkok Green, Medical Park, 539747",
    hours: "Daily, 24 hours",
    description: "Test description",
    website: "Institute of Mental Health: Home - IMH"
  }
  dbo.collection('facilities').insertOne(facility, function(err, res){
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});