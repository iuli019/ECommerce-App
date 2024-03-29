const router = require("express").Router();
let User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.PASS;

router.route("/").post((req, res) => {
  const { name, email, address, password, isAdmin } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(400).json("Please enter all fields");
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json("User already exists");
    }

    const newUser = new User({
      name,
      email,
      password,
      isAdmin
    });

    // create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin },
            jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: { name: user.name, id: user.id, email: user.email, isAdmin: user.isAdmin },
              });
            }
          );
        });
      });
    });
  });
});

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
