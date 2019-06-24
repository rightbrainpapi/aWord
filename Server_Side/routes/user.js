const 
  express = require('express'),
  app = express(),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  controllers = require('../controllers')

router.post('/signup', controllers.user.signup);

router.post('/login', controllers.user.login);
router.get('/:id', controllers.user.getuserbio)
// router.get('/bio', controllers.user.getuserbio)

router.use((req, res, next) => {
  console.log('activated')
  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader)

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

  ////////////////////////////////////////
  //////////////Protected/////////////////
  //////////////EndPoints/////////////////
  ////////////////////////////////////////


  //Establish endpoints for delete

  // router.post('/posts', controllers.user.create)

router.get('/', controllers.user.show)

// router.get('/:id', controllers.user.getuserbio)

router.post('/update/:id', controllers.user.redo)



module.exports = router;