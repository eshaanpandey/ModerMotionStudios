const drive = require('../config/googleDrive');

// Fetch files from a specific folder in Google Drive
const getFilesFromDrive = async (folderId) => {
    try {
        // List all files within the folder
        const res = await drive.files.list({
            q: `'${folderId}' in parents`,
            fields: 'files(id, name, mimeType, webContentLink)',
        });

        // Map over the files and return a structured object
        return res.data.files.map(file => ({
            id: file.id,
            name: file.name,
            mimeType: file.mimeType,
            url: file.webContentLink,  // URL to access the file
        }));
    } catch (err) {
        console.error('Error fetching files from Google Drive:', err);
        throw new Error('Error fetching files from Google Drive');
    }
};

// Fetch a specific file's metadata by its ID
const getFileMetadata = async (fileId) => {
    try {
        const file = await drive.files.get({
            fileId: fileId,
            fields: 'id, name, mimeType, webContentLink',
        });

        return {
            id: file.data.id,
            name: file.data.name,
            mimeType: file.data.mimeType,
            url: file.data.webContentLink,
        };
    } catch (err) {
        console.error('Error fetching file metadata:', err);
        throw new Error('Error fetching file metadata');
    }
};

module.exports = {
    getFilesFromDrive,
    getFileMetadata
};
