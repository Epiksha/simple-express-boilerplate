import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    dob: {
        type: String,
        required: [true, 'Date of birth is required.']
    },
    password: {
        type: String,
        required: [true, 'A password is required.']
    }
});

const User = mongoose.model('User', userSchema);

export default User;