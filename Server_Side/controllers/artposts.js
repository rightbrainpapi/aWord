//This exports all of the artposts
const 
  db = require('../models')


// multer = require('multer');

// const multerConf = {
//   storage: multer.diskStorage({
//     destination: function(req, file, next){
//       next(null, './public/artpostimages');
//     },
//     filename: function(req, file, next ){
//       console.log(file);
//       console.log('--------------------------------');
//       console.log('--------------------------------');
//       console.log('--------------------------------');
//       console.log('--------------------------------');
//     }
//   })
// };

module.exports = {

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    //////-----------Get All Function----------/////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    index: (req,res)=>{
        db.Artpost.find({}, (err,artposts)=>{
            res.json(artposts)
        })
    },

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    /////--------Create a New Post Function-------//////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    // const multerConf = {
    //       storage: multer.diskStorage({
    //         destination: function(req, file, next){
    //           next(null, './public/artpostimages');
    //         },
    //         filename: function(req, file, next ){
    //           console.log(file);
    //           console.log('--------------------------------');
    //           console.log('--------------------------------');
    //           console.log('--------------------------------');
    //           console.log('--------------------------------');
    //         }
    //       })
    //     };

    
    // multerConf: function() {
    //     storage: multer.diskStorage({
    //     destination: function(req, file, next){
    //         next(null, './public/artpostimages');
    //       },
    //       filename: function(req, file, next ){
    //         console.log(file);
    //       }
    //     }),
    //  function() {
    //     multer(multerConf).single('photo')}

    // },
    

    create: (req, res) =>{
        console.log("making post")
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log(req.file);
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxx");

        let newArtPost = new db.Artpost({
            artist: req.body.artist,
            title: req.body.title,
            city: req.body.city,
            description: req.body.description,
            image: 'artpostimages/' + req.file.filename,
            user: req.userId
        })
        console.log(newArtPost)
        db.Artpost.create(newArtPost,(err, newArtPostCreated) =>{
            if (err) return console.log(err);
            console.log(newArtPostCreated)
            res.json(newArtPostCreated)
        });
    },
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    //////--------Retrieve One Function--------/////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    getone: (req, res)=>{
        let id = req.params.id;
        db.Artpost.findById(id, (err,artpost ) => {
            res.json(artpost);
        });
    },

    getbyacronym: (req, res)=>{
        let acronym = req.params.acronym;
        db.Artpost.find({acronym: acronym}, (err, artposts)=>{
            res.json(artposts)
        })
    },


      
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ////////--------Update One Function-------///////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    redo: (req,res)=>{
        db.Artpost.findById(req.params.id, function(err, artpost ) {
            if (!artpost){
                res.status(404).send('data is not found');
            }  
            else{
                console.log('This is whats sending the response')
                artpost.title = req.body.title;
                artpost.artist = req.body.artist;
                artpost.city = req.body.city;
                artpost.description = req.body.description;
                artpost.image = req.body.image;
                
                artpost.save().then(artpost => {
                    res.json('Artpost updated!')
                }) 
                .catch(err => {
                    res.status(400).send('Update not possible!');
                });
            } 
        });
    },


    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////-----------Delete One Function----------///////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    delete: (req,res)=>{
        db.Artpost.findByIdAndDelete(req.params.id, (err,artpost)=>{
            if (!artpost){
                res.status(404).send('data is not found');
            }  
            else{
                
                artpost.save().then(artpost => {
                    res.json('Artpost deleted!')
                }) 
                .catch(err => {
                    res.status(400).send('Delete not possible!');
                });
            } 
        });
    }


}
