const videoService = require('../services/videoService');
const logger = require('../logger');

// Create a new video
exports.createVideo = async (req, res) => {
    try {
        const video = await videoService.createVideo(req.body);
        res.status(201).json(video);
    } catch (error) {
        logger.error('Error creating video:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all videos
exports.getAllVideos = async (req, res) => {
    try {
        const videos = await videoService.getAllVideos();
        res.status(200).json(videos);
    } catch (error) {
        logger.error('Error fetching videos:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get a single video by ID
exports.getVideoById = async (req, res) => {
    try {
        const video = await videoService.getVideoById(req.params.id);
        if (video) {
            res.status(200).json(video);
        } else {
            res.status(404).json({ message: 'Video not found' });
        }
    } catch (error) {
        logger.error('Error fetching video:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Update a video by ID
exports.updateVideo = async (req, res) => {
    try {
        const video = await videoService.updateVideo(req.params.id, req.body);
        if (video[0]) {
            res.status(200).json({ message: 'Video updated successfully' });
        } else {
            res.status(404).json({ message: 'Video not found' });
        }
    } catch (error) {
        logger.error('Error updating video:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete a video by ID
exports.deleteVideo = async (req, res) => {
    try {
        const result = await videoService.deleteVideo(req.params.id);
        if (result) {
            res.status(200).json({ message: 'Video deleted successfully' });
        } else {
            res.status(404).json({ message: 'Video not found' });
        }
    } catch (error) {
        logger.error('Error deleting video:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
