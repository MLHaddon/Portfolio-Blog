const ProjectController = require('../controllers/project.controller');

module.exports = app => {
  app.get('/api/projects', ProjectController.allProjs);
  app.get('/api/projects/:id', ProjectController.oneProj);
  app.post('/api/projects/new', ProjectController.addProj);
  app.put('/api/projects/:id/update', ProjectController.updateProj);
  app.delete('/api/projects/:id/delete', ProjectController.removeProj);
}