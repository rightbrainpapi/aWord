const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/taopers',
  { useNewUrlParser: true })
  const connection = mongoose.connection;


  ///////////////////////////////////////
  ///////////////////////////////////////
  ///////////Checking Connection//////////
  ///////////////////////////////////////
  ///////////////////////////////////////
  connection.once('open', function(){
    console.log('MongoDB database connection established successfully');
  })

  ////////////////////////////////////////
  ////////////////////////////////////////
  //////////////EndPoints/////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

module.exports= {
    // Post: require('./Post'),
    Artpost: require('./Artpost'),
    User: require('./User')
}
