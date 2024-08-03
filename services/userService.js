const User = require('../models/user');

exports.createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        return user;
    } catch (err) {
        throw new Error('Error creating user: ' + err.message);
    }
};

exports.findUserByUsername = async (username) => {
    try {
        return await User.findOne({ where: { username } });
    } catch (err) {
        throw new Error('Error finding user: ' + err.message);
    }
};

