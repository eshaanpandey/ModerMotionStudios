const drive = require('../config/googleDrive');

// Fetch files from a specific folder in Google Drive
const getFilesFromDrive = async (folderId) => {
    try {
        const res = await drive.files.list({
            q: `'${folderId}' in parents`,
            fields: 'files(id, name, mimeType, webContentLink)',
        });

        return res.data.files.map(file => ({
            id: file.id,
            name: file.name,
            mimeType: file.mimeType,
            url: `https://drive.google.com/file/d/${file.id}/view?usp=sharing`,  // Full shareable URL
        }));
    } catch (err) {
        console.error('Error fetching files from Google Drive:', err);
        throw new Error('Error fetching files from Google Drive');
    }
};

// Fetch metadata for a specific file from Google Drive
const getFileMetadataFromDrive = async (fileId) => {
    try {
        const file = await drive.files.get({
            fileId: fileId,
            fields: 'id, name, mimeType, webContentLink',
        });

        return {
            id: file.data.id,
            name: file.data.name,
            mimeType: file.data.mimeType,
            url: `https://drive.google.com/file/d/${file.data.id}/view?usp=sharing`,  // Full shareable URL
        };
    } catch (err) {
        console.error('Error fetching file metadata:', err);
        throw new Error('Error fetching file metadata');
    }
};

module.exports = {
    getFilesFromDrive,
    getFileMetadataFromDrive
};
