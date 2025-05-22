const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const { connectDB } = require ('./config/db.js');
const servicoRoutes = require ('./routes/servicos.js');

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/servicos', servicoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));

const Servico = require('./backend/models/Servico');
// Rota de teste de conexão
app.get('/testar-conexao', async (req, res) => {
  try {
    const servicos = await Servico.find();
    res.status(200).json({
      mensagem: '✅ Conectado com sucesso ao MongoDB!',
      quantidade: servicos.length,
      dados: servicos,
    });
  } catch (erro) {
    res.status(500).json({
      mensagem: '❌ Erro ao conectar com MongoDB.',
      erro: erro.message,
    });
  }
});