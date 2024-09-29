const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout ,user, userupload} = require("../controllers/authController");

const isLoggedIn = require("../middlewares/isLoggedIn");
const upload = require("../config/multer-config");

router.get("/",(req,res)=>{
    res.send("hey");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", isLoggedIn, logout);

router.get("/profile", isLoggedIn, user);

router.post("/userupload", upload.single("image"), isLoggedIn, userupload);

module.exports = router;