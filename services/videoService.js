const Video = require('../models/video');

// Creating a new video
exports.createVideo = async (videoData) => {
    try {
        return await Video.create(videoData);
    } catch (err) {
        throw new Error('Error creating video: ' + err.message);
    }
};

// Getting all videos
exports.getAllVideos = async () => {
    try {
        return await Video.findAll();
    } catch (err) {
        throw new Error('Error fetching videos: ' + err.message);
    }
};

// Getting a single video by ID
exports.getVideoById = async (id) => {
    try {
        return await Video.findByPk(id);
    } catch (err) {
        throw new Error('Error fetching video: ' + err.message);
    }
};

// Updating a video by ID
exports.updateVideo = async (id, updateData) => {
    try {
        return await Video.update(updateData, { where: { id } });
    } catch (err) {
        throw new Error('Error updating video: ' + err.message);
    }
};

// Deleting a video by ID
exports.deleteVideo = async (id) => {
    try {
        const result = await Video.destroy({ where: { id } });
        return result > 0;
    } catch (err) {
        throw new Error('Error deleting video: ' + err.message);
    }
};
