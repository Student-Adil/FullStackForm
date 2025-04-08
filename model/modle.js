const {deafult :mongoose} = require('mongoose');
const UserSchema= new mongoose.Schema({     
  name:{type:String,required:true},
  Email:{type:String,required:true},
  Adress:{type:String,required:true}, 
  Phone:{type:String,required:true},
},
{
  timestamps:true
});
const User=mongoose.model('User',UserSchema);
module.exports=User;