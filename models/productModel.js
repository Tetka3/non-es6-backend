const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timestamps: true,
});



module.exports = mongoose.model("Product", productSchema);