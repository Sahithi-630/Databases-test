const mongoose = require("mongoose");
const schema = mongoose.Schema({
    library:{
    name:required,
    city:required,
    books:[{books}]
    },
    books:{
        title:required,
        author:required,
        isbn:unique
    }
});

const userSchema = mongoose.model("user",schema);
module.exports = userSchema;

