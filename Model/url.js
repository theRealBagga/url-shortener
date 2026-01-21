const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
        shortId : {
            type : String,
            required : true,
            unique : true,
        },
        originalURL : {
            type : String,
            required : true,
        },
        viewHistory : [{ timestamp : { 
            type : Number,
            default : () => Date.now(),
        }}],
        
}, { timestamps : true });

const URL = mongoose.model('url', urlSchema);

module.exports = URL;