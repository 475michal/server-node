const mongoose = require('mongoose');
const { Book } = require('../Models/book.model');
const { User } = require("../Models/user.model");

exports.getAllUsers = async (req, res, next) => {
    try {
        const courses = await Course.find().select('-__v');
        return res.json(Book);
    } catch (error) {
        next(error);
    }
};
exports.getUserById = (req, res, next) => {
    const id = req.params.id;

    console.log(mongoose.Types.ObjectId.isValid(id));
    if (!mongoose.Types.ObjectId.isValid(id))
        next({ message: 'id is not valid' })

    else {
        Course.findById(id, { __v: false })
            .then(c => {
                res.json(c);
            })
            .catch(err => {
                next({ message: 'course not found', status: 404 })
            })
    }
};

exports.addUser = async (req, res, next) => {
   
    try {
        const c = new Book(req.body);
        await c.save();
        return res.status(201).json(c); 
    } catch (error) {
        next(error);
    }
};
exports.signin = async (req, res, next) => {
   
    try {
        const c = new Book(req.body);
        await c.save();
        return res.status(201).json(c); 
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
        next({ message: 'id is not valid' })

    try {
        const c = await Course.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true } 
        )
        return res.json(c);
    } catch (error) {
        next(error)
    }
};

exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
        next({ message: 'id is not valid' })

    else {
        try {
            if (!(await Course.findById(id)))
                return next({ message: 'course not found!!!', status: 404 })
            await Book.findByIdAndDelete(id)
            return res.status(204).send();
        } catch (error) {
            return next(error)
        }
    }
};