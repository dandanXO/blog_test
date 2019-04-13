const express = require('express')
const router = express.Router()

const posts = require('../models/posts');

router.get('/allPosts', (req, res, next) => {
    posts.find({})
        .then(data => {
            res.status(200).json({ data: data })
        })
})
router.get('/getpost', (req, res, next) => {
    posts.findOne({ title:req.query.name})
        .then(data => {
            res.status(200).json({ data: data })
        })
})
router.get('/getotherpost',(req,res,next)=>{
    //console.log(req.query.expcept)
    posts.find({ title:{$nin:[req.query.expcept]}}).limit(2)
    .then(data => {
        //console.log(data)
        res.status(200).json({ otherpost: data })
    })
})
module.exports = router