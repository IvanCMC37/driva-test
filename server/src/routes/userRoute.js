import * as express from 'express';

const router = express.Router();
const userController = require('../controllers/userController');
const db = require('../config/dbConfig');

router.get('/', userController.getAllUsers);

router.post('/', userController.addUser);

export default router;
