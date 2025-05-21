import mongoose from 'mongoose';

const ServicoSchema = new mongoose.Schema({
  descricao: String,
  cliente: String,
  data: Date,
  valor: Number,
  materialUtilizado: [String],
  status: String
});

export default mongoose.model('Servico', ServicoSchema);
