import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import servicoRoutes from './routes/servicos.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/servicos', servicoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));
