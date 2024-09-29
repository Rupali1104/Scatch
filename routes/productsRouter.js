const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");

router.get("/create", upload.single("image"), (req,res)=>{
    res.send(req.file);
});

module.exports = router;