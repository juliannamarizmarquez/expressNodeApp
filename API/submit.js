const express = require("express");
const router = express.Router();
const Form = require("../Models/talentForm");

// POST route to handle form submissions
// router.post("/", async (req, res) => {
//  const { name, age, email, talent } = req.body;

//  try {
//    const formEntry = new Form({ name, age, email, talent });
//    const savedEntry = await formEntry.save(); 
//    
//    console.log("Saved Data: ", savedEntry);
    
//    res.status(201).json({ 
//      message: "Form Submitted Successfully", 
//      data: savedEntry 
//    });
    
//  } catch (error) {
//    console.error("Error saving form data:", error);

//    if (error.code === 11000) {
//      res.status(400).json({ message: "Email already exists!" });
//    } else {
//      res.status(500).json({ message: "Error saving form data." });
//    }
//  }
// });

// module.exports = router;

router.post("/", async (req, res) => {
    try {
        console.log(req.body);

        res.status(200).json({
            success: true,
            message: "Form submitted successfully",
            data: req.body
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;