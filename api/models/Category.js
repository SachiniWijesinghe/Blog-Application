const mongoose = require ("mongoose");

const CategoryScheama = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        
    }

},
{timestamps:true}
);

module.exports = mongoose.model("Category",CategoryScheama);