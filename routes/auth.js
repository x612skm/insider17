const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
// router.get("/register", async(req,res) => {
//     const user = await new User({
//         username:"john",
//         email:"john@gmail.com",
//         password:"123456"
//     })

//     await user.save();
//     res.send("ok");
    
// })
//Register 2.0
router.post("/register", async (req, res) => {
    

    try{
        //gen new pass
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(req.body.password, salt);
        //create user new
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hasedPassword,
        });
        //save and response
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        //res.status(500).json(err)
    }
});

//login
router.post("/login", async (req,res)=>{
    try{
    const user = await User.findOne({
        email:req.body.email
    });
    !user && res.status(404).json("user not found");

    //for password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password");

    //if correct
    res.status(200).json(user);
}
catch(err){
    console.log(err);
    //res.status(500).json(err)
}

})




// router.get("/", (req,res) => {
//     res.send("hey its authRoute")
// })

module.exports = router;