const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const controllers = require('../controllers');
const multer = require('multer')
// const upload = multer({dest: 'public/artpostimages' });
const Artpost= require('../models/Artpost');
  

  ///////////////////////////////////////
  /////////////express.Router////////////
  /////////////saved as router///////////
  ///////////////////////////////////////
 

 //-----------Unprotected endpoint-------- 
router.get('/', controllers.artpostcontroller.index)
router.get('/acronym/',  controllers.artpostcontroller.getbyacronym)






  ////////////////////////////////////////
  ////////////////////////////////////////
  /////////  Section Makes Sure   ////////
  ///////// The User has a token  ////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  
router.use(( req, res, next) => {
  
  console.log('activated')

  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader)

  console.log('/////  inside router.use')

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, 'waffles');
    console.log('here is the verified', verified)
    req.userId = verified._id //set user id for routes to use
    next();
  } 
  else {
    res.sendStatus(403);
  }



  
})

//////////////////////////////////
//////////////////////////////////
///////////Multer Setup //////////
//////////////////////////////////
/////////////////////////////////



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/artpostimages/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString()+ '-' + file.originalname );
    // cb(null, Date.now() + '-' +file.originalname )
  }
});

const fileFilter = (req, file, cb) => {
//reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else{
    cb(null, false);
  }
};


//////////////////////////////////
//////////////////////////////////
////Passing Storage Function /////
//////////// To Multer////////////
//////////////as a ////////////////
//////middleware for app.use///////
//////////////////////////////////
//////////////////////////////////

// app.use(multer({ storage: storage }).single('file'))

// const upload = multer({ storage: storage }).single('file')

    const upload = multer({ 
        storage: storage,
        limits:{
          fileSize: 1024 *1024 *5
        },
        fileFilter: fileFilter
      });

      ////////////////////////////////////////
      //////////////Protected/////////////////
      //////////////EndPoints/////////////////
      ////////////////////////////////////////

    // router.post('/', controllers.artpostcontroller.create)

      ////////////////////////////////////////
      ////////////// Multer /////////////////
      //////////////Being Used/////////////////
      ////////////////////////////////////////


    // router.post('/', upload.single('file')  ,function(req, res, next) {
    //   console.log(req.file)
    //   console.log(req.body)
    //   console.log('/////  inside router.post');

    //   //Creating a new artpost
    //   const artpost = new Artpost({
    //     _id: new mongoose.Types.ObjectId(),
    //     artist: req.body.artist,
    //     title: req.body.title,
    //     city: req.body.title.city,
    //     description: req.body.description,
    //     image: 'artpostimages/' + req.file.filename
    //   });
    //   artpost.save()
    //     .then(artpost => {
    //       res.json('Artpost Created!')
    //       res.json(artpost)
    //   }) .catch(err=>{
    //     console.log(err);
    //   })

    //   return res.status(200).send(req.body);
      
    // });























router.post('/', upload.single('file'), controllers.artpostcontroller.create)



router.get('/:id',  controllers.artpostcontroller.getone)



router.post('/update/:id', controllers.artpostcontroller.redo)


router.delete('/delete/:id', controllers.artpostcontroller.delete)



module.exports = router;