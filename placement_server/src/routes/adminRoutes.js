const express = require('express');
const mongoose = require('mongoose');
const adminUser = mongoose.model('AdminUser');
const jwt = require('jsonwebtoken');
const e = require('express');
const router = express.Router();

router.post('/adminSignin',async (req,res) => {

    const{email,password} = req.body;
    

    if(!email || !password){

        return res.status(422).send({error : 'Must provide email n password'});

    }

    const user =await adminUser.findOne({email});
    console.log("user ::::", user);
    if(!user){
    return res.send({error : 'Email not found'});
    }

    try{
        const name = user.name;
        const userId = user._id;
        const account_type = user.account_type;
        const response = await user.compareadminPassword(password);
        if(response=="success")
        {
            const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        console.log("signin sucess")
        res.send({token, name,userId,account_type});
        //res.send('success')
    }
        
    }catch(err){

        console.error(err  );
        return res.send({error:'Incorrect password'});
    }
})

module.exports = router;