const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: 'Employee' });  // Explicitly setting the collection name

const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel;
