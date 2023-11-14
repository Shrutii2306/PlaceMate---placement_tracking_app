const express = require('express');
const mongoose = require('mongoose');
const facultyUser = mongoose.model('FacultyUser');
const jwt = require('jsonwebtoken');
const e = require('express');
const router = express.Router();

router.post('/facultySignin',async (req,res) => {

    const{email,password} = req.body;
    

    if(!email || !password){

        return res.status(422).send({error : 'must provide email n password'});

    }

    const user =await facultyUser.findOne({"personalDetails.email" :email});
    console.log("user ::::", user);
    if(!user){
    return res.status(404).send({error : 'Email not found'});
    }

    try{
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        console.log("signin sucess")
        //res.send({token});
        res.send('success')
        
    }catch(err){

        console.error(err  );
        return res.status(422).send({error:`${password}`+'Inavlid pass or email'});
    }
})
module.exports = router;