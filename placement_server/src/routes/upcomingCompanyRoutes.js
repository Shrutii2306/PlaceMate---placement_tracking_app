const express = require('express');
const mongoose = require('mongoose');
const companies = mongoose.model('UpcomingCompanies');
const jwt = require('jsonwebtoken');
const e = require('express');
const router = express.Router();

router.post('/addUpcomingCompanies',async (req,res) => {

    console.log(req.body);
    const {title,company,description,salary,date} = req.body;
    console.log(title,company,description,salary,date)
        
    try
        {
        const newCompany = new companies({title,company,description,salary,date});
        await newCompany.save();
        //const token=jwt.sign({Id : newCompany._id},'MY_SECRET_KEY')
        res.send("saved successfully");
    }catch(err){

        return res.send(err);
    }

});

router.get('/getUpcomingCompanies', async (req,res) => {
    try
    {
    const companiesdata = await companies.find();
    console.log(companiesdata);
    res.send(companiesdata);
    }catch(err){
        res.send(err);
    }
})



module.exports = router;
