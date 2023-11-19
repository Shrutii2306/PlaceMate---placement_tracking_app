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
    }},
    account_type : {

        type: String,
        required : true
    }
});

studentUserSchema.pre('save', function(next) { 

    const user =this;
    console.log("user passsword", user.personalDetails.password);
    if(!user.isModified('personalDetails.password')){

        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {

        if(err) {
            return next(err);
        }

        bcrypt.hash(user.personalDetails.password, salt,(err, hash) => {
            if(err) {
                return next(err);
            }

            user.personalDetails.password = hash;
            next();
        });
    });
});
studentUserSchema.methods.comparePassword = function (candidatePassword) {

    console.log("this",this)
    const user = this
    console.log(" uuuser r",candidatePassword,user.personalDetails.password,":)))))))))")
    return new Promise((resolve, reject) => {

        bcrypt.compare(candidatePassword,user.personalDetails.password, (err, isMatch) => {

            if(err) { 
                return reject(err);
            }
            if(!isMatch){

                return reject(false);
            }

                return resolve(true);
            
        })
        
    })
}

const facultyUserSchema = new mongoose.Schema({


    email : {

        type : String,
        required : true,
        unique : true
    },

    password : {

        type: String,
        required: true
    },
    name : {

        type: String,
        required: true
    },
    account_type : {

        type: String,
        required : true
    }
    
});

const adminUserSchema = new mongoose.Schema({


    email : {

        type : String,
        required : true,
        unique : true
    },

    password : {

        type: String,
        required: true
    },
    name : {

        type: String,
        required: true
    },
    account_type : {

        type: String,
        required : true,
        
    }
    
});

adminUserSchema.methods.compareadminPassword = function (candidatePassword) {

    if(candidatePassword==this.password){
        return "success";
    }else{

        return "fail";
    }
    
}

const companiesSchema = new mongoose.Schema({

    companyDetails : 
    {
        title :{
        type:String,
        required : true,
        },
        company : {
            type: String,
            required :true
        },
        description : {
            type : String,
            required : true
        },
        salary : {
            type : String,
            required : true
        },
        dateToApply : {

            type : String,
            required : true
        },
        link : {
            type : String,
            required : true
        }
    },

    criteria : {

        ssc : {
            type : String,
            required : true
        },
        hsc : {
            type : String,
            required : true
        },
        graduation : {

            type : String,
            required : true
        },
        postGraduation : {
            type : String,
            required : true
        }
    },

    status : {

        recruting : {

            type : String,
            required : true
        },
        app_count : {

            type : Number,
        },


    }

})

const applicantsSchema = new mongoose.Schema({

    userId : {

        type: String,
        required: true,
    },
    name : {
        type : String,
        required : true,
    },
    jobTitle : {

        type : String,
        required : true
    },
    company :{
        type : String,
        required : true
    }

})

const upcomingCompanySchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    company : {
        type : String,
        requierd : true
    },
    description : {
        type :String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    date :{
        type: String,
        requierd: true
    }
})

mongoose.model('UpcomingCompanies',upcomingCompanySchema);
mongoose.model('Applicants', applicantsSchema);
mongoose.model('Companies',companiesSchema);
mongoose.model('FacultyUser', facultyUserSchema);
mongoose.model('AdminUser', adminUserSchema);
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