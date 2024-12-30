const express = require('express');
const router = express.Router();
const { createProject, getProjects, getFilesForProject } = require('../controllers/projectController');

// Create a new project
router.post('/projects', createProject);

// Get all projects
router.get('/projects', getProjects);

// Get files for a specific project
router.get('/projects/:projectId/files', getFilesForProject);

module.exports = router;
