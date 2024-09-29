const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

const bcrypt = require('bcrypt');
const isLogedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user-model");


if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(503)
        .send("You dont have permission to create a new owner");
    }

    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(password ,salt ,async (err,hash)=>{
         let createdOwner = await ownerMode.create({
              fullname:fullname,
              email:email,
              password:hash
          });
    res.status(201).send(createdOwner);
  });
});
});
};

router.get("/admin",isLogedIn,async(req,res)=>{
  let user = await userModel.findOne({email:req.user.email});
  let success = req.flash("success");
  res.render("createproducts.ejs",{success,user,currentPage:"Admin"})
});


module.exports = router;
