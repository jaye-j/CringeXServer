const express = require("express");
const router = express.Router();

let db = require("../models");

router.post("/profile", (req, res) => {
  let username = req.body.name;
  let bio = req.body.bio;
  let pictureUrl = req.body.pictureUrl;
});

router.get("/profile", (req, res) => {
  db.user.findOne({
    where: {
      id : 1
    },
    attributes: ['id', 'handle', 'email'],
    include: [{
      model: db.videos,
      required: true
    },
    {
      model: db.profileData
    }]
  })
  .then(posts=>{
    res.json(posts)
  })
})


module.exports = router;