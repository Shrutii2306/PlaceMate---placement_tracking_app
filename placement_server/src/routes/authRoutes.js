const express = require('express');
const mongoose = require('mongoose');
const studentUser = mongoose.model('StudentUser');
const studentData = mongoose.model('student_placement_data');
const jwt = require('jsonwebtoken');
const e = require('express');
const router = express.Router();

router.post('/checkUser', async(req,res) => {
    console.log("inside check fnbbbbbbbbbbbbb");
    //const [getDepartments, setDepartments]= useState([]);
    const users = await studentData.find();
    console.log(users);
    
    const { rollno,email} = req.body;
    console.log(rollno, email);
    if(!email || !rollno){

        console.log("inside email empty")
        return res.status(422).send({error : 'must provide email n rno'});

    }

    
    const user1 =await studentData.findOne({email});
    console.log("user1",user1)
    const user2 = await studentData.findOne({rollno});
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
        console.log(personalDetails);
        console.log(academicDetails);
        try
        {
        const studentuser = new studentUser({personalDetails,academicDetails});
        await studentuser.save();
        const token=jwt.sign({userId : studentuser._id},'MY_SECRET_KEY')
        res.send({token});
    }catch(err){

        return res.send("could not sign up");
    }
})

router.post('/signinUser',async (req,res) => {

    const{email,password} = req.body;
    

    if(!email || !password){

        return res.status(422).send({error : 'must provide email n password'});

    }

    const user =await studentUser.findOne({email});
    if(!user){
    return res.status(404).send({error : 'Email not found'});
    }

    try{
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        
        res.send({token});
    }catch(err){

        console.error(err  );
        return res.status(422).send({error:`${password}`+'Inavlid pass or email'});
    }
})

module.exports = router;