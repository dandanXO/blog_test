const express = require('express')
const router = express.Router()

router.get('/test',(req,res,next)=>{
    res.status(200).json({message:'for route test'})
})

module.exports = router