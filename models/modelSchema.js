const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    a_string: String,
    b_string: {type: String, default: "Hello, world!", required: true},
    a_number: {type: Number, min: 1, max: 100, required: true},
    a_date: {type: Date, default: Date.now},
});

const breakfastSchema = new Schema({
    eggs: {type: Number, min: [6, "Too few eggs"], max: [12, "Too many eggs"], required: [true, "Why no eggs?"]},
    drink: {type: String, enum: ["Coffee", "Tea", "Water"]},
});

module.exports = mongoose.model("Breakfast", breakfastSchema);
module.exports = mongoose.model("SomeModel", SomeModelSchema);