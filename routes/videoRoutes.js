const express = require('express');
const videoController = require('../controllers/videoController');
const router = express.Router();

// Create a new video
router.post('/', videoController.createVideo);

// Get all videos
router.get('/', videoController.getAllVideos);

// Get a single video by ID
router.get('/:id', videoController.getVideoById);

// Update a video by ID
router.put('/:id', videoController.updateVideo);

// Delete a video by ID
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
