const Project = require('../models/Project');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects); // Includes public file URLs
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const createProject = async (req, res) => {
    try {
        const { title, description, category, thumbnailUrl, fileUrls } = req.body;

        const newProject = new Project({
            title,
            description,
            category,
            thumbnailUrl, 
            files: fileUrls, // Save public Google Drive links directly
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        console.error('Error creating project:', err);
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const getFilesForProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;

        // Find the project by ID
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Return the file URLs
        res.status(200).json(project.files); // Public file URLs
    } catch (err) {
        console.error('Error fetching files for project:', err);
        res.status(500).json({ message: 'Error fetching files', error: err.message });
    }
};

module.exports = { createProject, getProjects, getFilesForProject };
