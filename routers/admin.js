const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.render('admin/index');
});
router.get('/sobre',(req,res)=>{
    res.send("olá!, página sobre");
});

module.exports = router;