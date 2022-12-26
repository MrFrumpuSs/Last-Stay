import { Router } from "express";
import AuthController from '../controllers/AuthController.js';

const router = new Router();

router.get('/vk', AuthController.vk);
router.get('/callback', AuthController.callback);

export default router;