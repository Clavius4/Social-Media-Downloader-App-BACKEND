const express = require('express');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const videoRoutes = require('./routes/videoRoutes');
const logger = require('./logger');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);

// Starting the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    try {
        await connectDB();
        logger.info(`Server running on port ${PORT}`);
    } catch (err) {
        logger.error('Server startup error:', err);
    }
});
