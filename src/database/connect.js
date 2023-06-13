const mongoose = require("mongoose");

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://TejasDhodi:Tejas755@tj5.qgerxdx.mongodb.net/CourseRegistration?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// }).then(() => {
//     console.log("connection done");
// }).catch(() => {
//     console.log("refuse");
// });
  
mongoose.connect("mongodb+srv://TejasDhodi:Tejas755@tj5.qgerxdx.mongodb.net/UserRegistration?retryWrites=true&w=majority"
).then(() => {
    console.log("connection Established");
});

