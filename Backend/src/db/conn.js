
const mongoose=require('mongoose');



mongoose.connect('mongodb://localhost:27017/Bharti')
.then((res)=>{
    console.log('connnnnectiong')
})
.catch((err)=>{
    console.log(err);
})