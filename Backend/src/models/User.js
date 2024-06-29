

const mongoose=require('mongoose');
// const validator=require('validator');
// const bcrypt =require('bcryptjs');
// const jwt=require('jsonwebtoken');


const userSchema= new mongoose.Schema({
    name:
    {
        type: String,
    
    },
    
    email:{
        type: String,
        
        unique:true,
       
    },
    
    password:{
        type:String,
        
    },
    cpassword:{
        type:String,
    
    } 

}) 

// //? JWt Create token by JSon web ttoken
// studentSchema.methods.generateAuthToken=  async function(){
//     try{
        

//         console.log(this._id);
//         const createtoken=jwt.sign({_id:this._id.toString()}, process.env.KEY);
//            console.log(createtoken);
//            console.log("upar wala token hai")

// //? we can create token filed and save in it this token
//     this.tokens=this.tokens.concat({token:createtoken});
//     await this.save();
//     return createtoken;
// }
// catch(error){
//         //   res.send('token errore')
//           console.log('token errore')
// }
// }



// // ?? bcrypt hasing  .pre is said that schema modell ko save karane se pahel ye kar do
// //? and cofirma passsword ko db me sav nahi  karna hai

// studentSchema.pre("save", async function(next){

//     if(this.isModified("password")){
//         console.log(`${this.password}`);
//         this.password=await bcrypt.hash(this.password,10)
//         // this.confirmpassword=undefined;
//         this.confirmpassword=await bcrypt.hash(this.confirmpassword,10)

//         console.log(`this is hash pass ${this.password}`);
        
//  }
//     next();
// })







//??? model name

const User=new mongoose.model('User',userSchema)
module.exports=User;










