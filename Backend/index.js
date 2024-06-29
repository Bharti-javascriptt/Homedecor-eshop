const express=require('express');
require('./src/db/conn')
const app=express();
const User=require('./src/models/User')
app.use(express.json());
const cors=require('cors');
app.use(cors())




//?? Now create Route



app.get('/', (req,res)=>{
    res.send('app is working ')
})



// ?? API
// ?? when user register then user data come here and from here data send to db to save
// ? to get data here we can connect register page throuhg api to get data from frontend
app.post("/register", async(req,res)=>{
    let user=new User(req.body)
    let result =await user.save();
    result=result.toObject();
    delete result.password;
    res.send(result);
    console.log(result)
})


app.post("/signin", async(req,res)=>{
    // res.send("req.body")
    console.log(req.body)
    if(req.body.password && req.body.email)
            {
                let user=await  User.findOne(req.body).select("-password");
                if (user){
                    res.send(user)}
                    else{
                        res.send("no user found")
                    }

            }
            else{
                res.send("no user found")
            }

})
app.listen(4000);
  






