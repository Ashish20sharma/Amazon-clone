const express=require("express")
const router=express.Router()
const Products=require("../models/productsSchema")

// get productsdata api
router.get("/getproducts",async function(req,res){
    try {
        const productsdata=await Products.find();
        res.status(200).json({message:"Success",result:productsdata})
    } catch (error) {
        res.status(201).json({message:"Failed"})
    }
})

module.exports=router;