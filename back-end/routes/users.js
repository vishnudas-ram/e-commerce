const express = require('express');
const router = express.Router();
const password = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

router.put('/up', (req, res) => {
    var user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
    };
    console.log(req.body.id);
    User.findByIdAndUpdate(req.body.id, { $set: user }, { new: true },   function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log(req.body.id);
        res.json({success:true, msg:'User updated login in again'});
    }
});
});


router.put('/delete',(req,res)=>{
    
    console.log(req.body.id);
    User.findByIdAndRemove(req.body.id, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log(req.body.id);
        res.json({success:true, msg:'User updated login in again'});
    }
});
});

router.post('/register',(req,res,next) => {
  console.log("hello");
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser,(err, user)=>{
        if(err){
            res.json({success:false, msg:'Failed to register user'});
        }else{
            res.json({success:true, msg:'User registered'});
        }
    });
});

router.post('/authenticate',(req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,(err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token=jwt.sign({user}, config.secret,{
                    expiresIn:604800
                });
                res.json({
                    success:true,
                    token:'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }
            else{
                return res.json({success:false, msg:'wrong password'});
            }
        });
    });
});

router.get('/profile',password.authenticate('jwt', {session:false}) ,(req,res,next) => {
    res.json({user: req.user});
});

module.exports=router;
