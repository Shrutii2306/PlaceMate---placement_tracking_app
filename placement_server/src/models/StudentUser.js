const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentDataSchema = new mongoose.Schema({

    rno:{

        type : String,
        unique: true,
        required :true
    },
    email:{
        type: String,
        unique: true,
        required: true
    }
    
})

const departmentSchema = new mongoose.Schema({

    dept_id: {
        type:String,
        required: true,
        unique: true
    },
    
    name : {
        type:String,
        required: true
    }
    
})

const studentUserSchema = new mongoose.Schema({

    personalDetails :
    {
        email :{

            type :String,
            required: true,
            unique: true
        },
        
        rollno : {

            type: String,
            required: true,
            unique: true
        }, 
        name : {

            type: String,
            required: true,
        }, 
        password : {

            type: String,
            required : true
        }, 
        regno : {

            type: String,
            required: true
        }, 
        contact : {

            type: String,
            required: true
        },
    },

    academicDetails :
    {
        dept : {

            type: String,
            required:true
        }, 
        
        year : {

            type :String,
            required: true
        },
        
        marks10 : {

            type: String,
            required: true
        },
        
        marks12 : {

            type: String,
            required : true
        },
        marksGrad: {

            type: String,
            required : true
        },
        marksPostGrad: {

            type: String,
            required : true
    }}
});

studentUserSchema.pre('save',function(next){

    const studentuser = this;
    if(!studentuser.isModified('password')){

        return next();
    

    bcrypt.genSalt(10, (err, salt) => {

        if(err){
            return next(err);
        }

        bcrypt.hash(studentuser.password, salt, (err, hash) => {

            if(err){
                return next(err);
            }
            studentuser.password=hash;
            next();
        })
    })

}
})

studentUserSchema.methods.comparePassword = function(candidatePassword) {

    const studentuser = this;
    return new Promise((resolve, reject) => {

        bcrypt.compare(candidatePassword, studentuser.password, (err, isMatch) => {

            if(err){
                return reject(err);
            }

            if(!isMatch){

                return reject(false);
            }

            resolve(true);
        } )

    })


};


mongoose.model('StudentUser', studentUserSchema);
mongoose.model('departments', departmentSchema);
mongoose.model('student_placement_data', studentDataSchema);




// ,
// "name" :"Shruti",
// "password":"12345",
// "regno":"123456",
// "contact":"contact",
// "dept":"depttt",
// "year":"3",
// "marks10":"333",
// "marks12":"33333",
// "marksGrad":"12",
// "marksPostGrad":"22"