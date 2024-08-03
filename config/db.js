const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
