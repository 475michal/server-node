const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    
    name:{
        type: String,
        minlength: 2, 
        required: true
  
      },
    type:{
        type: String,
        enum: ['aaa', 'bbb', 'ccc'] 
    },
    isLend:{
        type: Boolean,
        required: true
    },
    pages:{
        Number,
        minlength:1
    },
    date:{
        type:new Date(),
    },
    pageNumber: Number,
});

module.exports.Book =mongoose.model('books', bookSchema);
