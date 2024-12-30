const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mimeType: { type: String },
    url: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }, // Link to project
}, { timestamps: true });

module.exports = mongoose.model('File', FileSchema);
