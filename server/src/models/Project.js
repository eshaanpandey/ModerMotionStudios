const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    thumbnailUrl: { type: String, required: true }, // Store the thumbnail's public URL
    files: [{ type: String }], // Store public Google Drive file URLs
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
