const express = require("express")
const router = express.Router()
const Products = require("../models/productsSchema")
const users = require('../models/userSchema')

// get productsdata api
router.get("/getproducts", async function (req, res) {
    try {
        const productsdata = await Products.find();
        res.status(200).json({ message: "Success", result: productsdata })
    } catch (error) {
        res.status(201).json({ message: "Failed" })
    }
});

// get individual Data
router.get('/getproductone/:id', async function (req, res) {
    try {
        const product = await Products.findOne({ id: req.params.id })
        console.log(product)
        res.status(200).json({ message: "Success", result: product })
    } catch (error) {
        res.status(201).json({ message: "Failed" })
    }
})

// register user
router.post("/register", async function (req, res) {
    try {
        const user = new users({
            name: req.body.name, email: req.body.email, mobile: req.body.mobile, password: req.body.password, Cpassword: req.body.Cpassword
        });
        await user.save()
        res.status(200).json({message:"user Registerd",result:user})
    } catch (error) {
        res.status(201).json({message:"failed"})
    }
});

// login user
// router.post("/login",async function(req,res){
    // let token=await user.generateToken(req.body); 

// }



module.exports = router;