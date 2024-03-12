const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name:{
      type: String,
      minlength: 2, 
      required: true

    },
    favoriteType:{
      type: String,
      minlength: 2, 
      required: true
    },
    isLend:{
        type: Boolean,
        required: true
    }
});

module.exports.User=mongoose.model('users', userSchema);
