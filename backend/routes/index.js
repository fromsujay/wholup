var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://Sujay:abc123@ds115592.mlab.com:15592/wholup',
    options,
    function(err) {
     console.log(err);
    }
);

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

var UserModel = mongoose.model('users', userSchema);

/* GET sigin */
router.get('/signin', function(req, res, next) {
  var isUserExist = false;
  UserModel.find(
    { email: req.query.email, password: req.query.password },
    function (err, datas) {
      if (datas.length == 0) {
        isUserExist = false;
      } else if (datas.length == 1) {
        isUserExist = true;
        console.log('datas', datas);
      } else {
        console.log('I think you have a problem at hand.');
      }

      res.json({result: isUserExist, firstName: datas[0].firstName, lastName: datas[0].lastName, email: datas[0].email });

    }
  )
});


router.post("/signup", function(req, res) {
    console.log(req.body);
    var newUser = new UserModel ({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
     });

     newUser.save(
      function (error, user) {
        UserModel.find(
          function (err, users) {
            res.json({users});
            console.log(users);
          }
        )
      }
    );
    });

module.exports = router;
