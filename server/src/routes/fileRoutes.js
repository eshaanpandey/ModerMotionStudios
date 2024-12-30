const express = require('express');
const router = express.Router();
const { getFilesFromDrive, getFileMetadata } = require('../services/googleDriveService');

// Route to get files from a specific Google Drive folder (using folderId)
router.get('/files/:folderId', async (req, res) => {
    try {
        const folderId = req.params.folderId;
        const files = await getFilesFromDrive(folderId);
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching files from Google Drive', error: err });
    }
});

// Route to get metadata of a specific file by its fileId
router.get('/file/:fileId', async (req, res) => {
    try {
        const fileId = req.params.fileId;
        const file = await getFileMetadata(fileId);
        res.status(200).json(file);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching file metadata', error: err });
    }
});

module.exports = router;
