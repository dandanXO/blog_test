const express = require('express')
const routeCache = require('route-cache')
const router = express.Router()

const posts = require('../models/posts');

router.get('/allPosts',routeCache.cacheSeconds(20), (req, res, next) => {
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
// router.get('/test',routeCache.cacheSeconds(10),(req,res,next)=>{
//     console.log('you will only see this every 10 seconds.');
    
//         //console.log(data)
//         res.status(200).json({ otherpost: "data" })
    
// })
module.exports = router