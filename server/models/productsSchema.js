const mongoose=require("mongoose");

const productsSchema=new mongoose.Schema({
    id:{
        type:String
    },
    url:{
        type:String
    },
    detailsurl:{
        type:String,
    },
    title:{
        type:Object
    },
    price:{
        type:Object
    },
    description:{
        type:String
    },
    discount:{
        type:String
    },
    tagline:{
        String
    }

})

module.exports=new mongoose.model("product",productsSchema);