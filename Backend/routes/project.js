'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');


var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'})
//middleware se ejecuta antes de que ejecute el metodo o controlador de la app 


router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test)
router.post('/Save_Database', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/Upload/:id',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile)
module.exports = router;
