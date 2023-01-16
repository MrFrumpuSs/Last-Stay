import { Router } from "express";
import DonateController from '../controllers/DonateController.js';

const router = new Router();

router.get('/donate', DonateController.donate);
router.get('/callback', DonateController.callback);

export default router;