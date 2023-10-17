import mongoose from "mongoose";


//this is to verify the object received 
const userSchema = mongoose.Schema({
    iss: {
        type :String 
    },
    azp : {
        type : String
    },
    aud : {
        type : String
    },
    sub : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true
    },
    email_verified : {
        type : Boolean,
        required :true
    },
    nbf : {
        type : Number
    },
    name : {
        type : String ,
        required : true
    },
    picture : {
        type: String,
        required : true
    },
    given_name : {
        type :String
    },
    family_name : {
        type :String
    },
    locale : {
        type :String
    },
    iat : {
        type :Number
    },
    exp : {
        type :Number
    },
    jti : {
        type :String
    }
});


//here 'user' is the collection name that we have createdin the mongo db database
const user = mongoose.model('user',userSchema);

export default user ;