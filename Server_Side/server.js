const express = require('express');
const app = express();
const cors = require('cors');
    db = require('./models')
    fs = require('fs');


/////////////////////////////////////////////////
//////////////Pulling in My Routes///////////////
/////////////////////////////////////////////////

artpostRoutes = require('./routes/artpostsroute'),
userRoutes = require('./routes/user'),
// citypostRoutes = require('./routes/citypostsroute'),



bodyParser = require('body-parser')



// ///////////////////////////////////////////////
// ////////////Pulling in Multer///////////////
// ///////////////////////////////////////////////
// var multer = require('multer')


// //////////////////////////////////
// //////////////////////////////////
// ///////////Multer Setup //////////
// //////////////////////////////////
// /////////////////////////////////



// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     cb(null, 'public/artpostimages')
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString()+ '-' + file.originalname );
//   }
// })


// //////////////////////////////////
// //////////////////////////////////
// ////Passing Storage Function /////
// //////////// To Multer////////////
// //////////////as a ////////////////
// //////middleware for app.use///////
// //////////////////////////////////
// //////////////////////////////////



// var upload = multer({ storage: storage }).single('file')


/////////////////////////////////
//////////////////////////////////
////////////Middlewares///////////
///////Express Use Cases//////////
//////////////////////////////////
/////////////////////////////////


app.use(cors())
// app.use(multer({ storage: storage }).single('file'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))


//when an axios is called it comes here because the server stands between the frontend and backend. 
//on this particular I am adding the file to the folder public/artpostimages


// app.post('/api/artposts',  function(req, res, next) {

//     upload(req, res, function (err) {
//         console.log('PPPPPPPPPPPPPPP');
//         console.log(req.file);

//            if (err instanceof multer.MulterError) {
//                return res.status(500).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }
           
//       return res.status(200).send(req.file)

//     })


// });












   
// app.use('/api/cityposts', citypostRoutes)

app.use('/api/artposts', artpostRoutes )

app.use('/user', userRoutes)

app.listen(3001, () => console.log('Listening on port 3001 :)'))