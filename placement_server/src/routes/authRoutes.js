const express = require('express');
const mongoose = require('mongoose');
const studentUser = mongoose.model('StudentUser');
const studentData = mongoose.model('student_placement_data');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/checkUser', async(req,res) => {
    console.log("inside check fnbbbbbbbbbbbbb");
    const users = await studentData.find();
    console.log(users);
    
    const { rno,email} = req.body;
    console.log(rno, email);
    if(!email || !rno){

        console.log("inside email empty")
        return res.status(422).send({error : 'must provide email n rno'});

    }

    
    const user1 =await studentData.findOne({email});
    console.log("user1",user1)
    const user2 = await studentData.findOne({rno});
    console.log("user2",user2)
     //dept = await departments.find();
    
    //console.log(dept);
    if(JSON.stringify(user1) === JSON.stringify(user2) && user1!= null )
    {
        console.log("inside first chk")
        return res.send('success');
    }
    if( !user1 || !user2){
        console.log("inside second chk")
        return res.send('no match found');
    }
    if( JSON.stringify(user1)  != JSON.stringify(user2)){
        console.log("inside third chk")
        return res.send('no match found');
    }
})

router.post('/signupUser', async(req, res) => {

    
        const {email,rollno,name,password,regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad } = req.body;
        const personalDetails = {email,rollno,name,password,regno, contact};
        const academicDetails= {dept,year,marks10,marks12,marksGrad,marksPostGrad} ;
        const account_type = "student";
        console.log(personalDetails);
        console.log(academicDetails);
        try
        {
        const studentuser = new studentUser({personalDetails,academicDetails, account_type});
        await studentuser.save();
        const token=jwt.sign({userId : studentuser._id},'MY_SECRET_KEY')
        res.send({token,name, account_type});
    }catch(err){

        return res.send("Could not sign up");
    }
})

router.post('/signinUser',async (req,res) => {

    const{email,password} = req.body;
    

    if(!email || !password){

        return res.send({error : 'Must provide Email and password'});

    }

    const user =await studentUser.findOne({"personalDetails.email" :email});
    console.log("user ::::", user);
    if(!user){
    return res.send({error : 'Email not found'});
    }

    try{
        const name = user.personalDetails.name;
        const userId = user._id;
        const account_type = user.account_type;
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
      
        console.log("signin sucess")
        //res.send({token});
        res.send({token,name, account_type,userId});
        
    }catch(err){

        console.error(err  );
        return res.send({error:'Incorrect password!'});
    }
})

router.post('/getUserDetails', async(req,res) => {

    
    const _id = req.body;
    const user =await studentUser.findOne({_id});
    
    try{
        if(!user){

        return res.send('error not found user');
    }
    
    return res.send({ssc : user.academicDetails.marks10, hsc : user.academicDetails.marks12, graduation : user.academicDetails.marksGrad, postGraduation :user.academicDetails.marksPostGrad });
    }catch(err){
        console.log(err);
    }
})


module.exports = router;