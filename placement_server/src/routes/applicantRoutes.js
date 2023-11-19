const express = require('express');
const mongoose = require('mongoose');
const studentUser = mongoose.model('StudentUser');
const applicants = mongoose.model('Applicants');
const router = express.Router();

router.post('/putApplicant', async (req, res) => {

    const {userId,jobTitle,company} = req.body;
    console.log("req.body",req.body)
    console.log(userId,jobTitle,company)
    const _id = userId;
    try{
        console.log(_id)
        const newStudentUser = await studentUser.findOne({_id});
        console.log("fetched user: ",newStudentUser)
        const name = newStudentUser.personalDetails.name;
        const newApplicant = new applicants({userId,name,jobTitle,company});
        newApplicant.save();
    
        res.send("hellow thereee");
    }catch(err)
    {
        console.log(err)
    }
})

module.exports = router;