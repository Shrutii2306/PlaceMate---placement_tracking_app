const express = require('express');
const mongoose = require('mongoose');
const companies = mongoose.model('Companies');
const jwt = require('jsonwebtoken');
const e = require('express');
const { compare } = require('bcrypt');
const router = express.Router();

router.post('/addCompany',async (req,res) => {

    console.log(req.body);
    const {title,company,description,salary,dateToApply,link,ssc,hsc,graduation,postGraduation,recruting,app_count} = req.body;
    console.log(title,company,description,salary,dateToApply,ssc,hsc,graduation,postGraduation,recruting,app_count)
    const companyDetails = {title,company,description,salary,dateToApply,link};
    
    const criteria = {ssc,hsc,graduation,postGraduation};
    const status = {recruting,app_count};
    console.log(companyDetails,criteria,status);
    //res.send('inside company fn')
    const users = await companies.find();
    console.log(users);
    try
        {
        const newCompany = new companies({companyDetails,criteria,status});
        await newCompany.save();
        const token=jwt.sign({Id : newCompany._id},'MY_SECRET_KEY')
        res.send({token});
    }catch(err){

        return res.send(err);
    }

})

module.exports = router;