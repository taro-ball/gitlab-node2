import { Router } from 'express';
import StudentController from '../controllers/studentController.js';
const routes = Router();
routes.get('/api', StudentController.getAllStudents);
routes.get('/api/:id', StudentController.getSingleStudent);
export default routes;