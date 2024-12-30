const Project = require('../models/Project');

// Get all files (Google Drive links) related to a specific project
const getFilesForProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;

        // Find the project by ID
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Check if there are files in the project
        if (!project.files || project.files.length === 0) {
            return res.status(404).json({ message: 'No files found for this project' });
        }

        // Send the list of files (Google Drive links) associated with this project
        const fileUrls = project.files.map(fileId => `https://drive.google.com/file/d/${fileId}/view?usp=sharing`);
        res.status(200).json(fileUrls);  // Return the full shareable URLs
    } catch (err) {
        console.error('Error fetching files for project:', err);
        res.status(500).json({ message: 'Error fetching files', error: err.message });
    }
};

// Get the metadata of a specific file by its ID (Google Drive file ID)
const getFileMetadata = async (req, res) => {
    try {
        const fileId = req.params.fileId;

        // Find the project where this fileId exists in the 'files' array
        const project = await Project.findOne({ 'files': fileId });

        if (!project) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Fetch file metadata from Google Drive
        const file = await getFileMetadataFromDrive(fileId);

        res.status(200).json(file);  // Return file metadata from Google Drive
    } catch (err) {
        console.error('Error fetching file metadata:', err);
        res.status(500).json({ message: 'Error fetching file metadata', error: err.message });
    }
};

module.exports = { getFilesForProject, getFileMetadata };
