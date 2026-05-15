const mongoose = require("mongoose");

const talentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    talent: String
});

module.exports = mongoose.model("Form", talentSchema);