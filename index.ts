import express from 'express';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT);
