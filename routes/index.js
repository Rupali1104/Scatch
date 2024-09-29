const express = require('express');
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });  
});

router.get("/shop", isloggedin , function(req,res){
    res.render("shop");
});




module.exports = router;
