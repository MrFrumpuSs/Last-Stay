import express from "express";
import cors from "cors";
import config from "config";
import cookieParser from "cookie-parser";

import authRouter from "./routers/auth.router.js";
import donateRouter from "./routers/donate.router.js";

const PORT = config.get('serverPort');

const app = express();

app.use(cors({origin:['*'],credentials: true}));
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api', donateRouter);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Сервер успешно запущен на порту ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();