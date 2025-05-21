const form = document.getElementById('formServico');
const lista = document.getElementById('listaServicos');
const API_URL = 'https://SEU-PROJETO-RAILWAY.up.railway.app/api/servicos';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const servico = {
    descricao: form.descricao.value,
    cliente: form.cliente.value,
    data: form.data.value,
    valor: parseFloat(form.valor.value),
    materialUtilizado: form.materiais.value.split(',').map(m => m.trim()),
    status: form.status.value
  };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(servico)
  });

  form.reset();
  carregarServicos();
});

async function carregarServicos() {
  const res = await fetch(API_URL);
  const dados = await res.json();

  lista.innerHTML = '';
  dados.forEach(s => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<b>${s.descricao}</b> - ${s.cliente} - R$${s.valor} - ${s.status}`;
    lista.appendChild(li);
  });
}

carregarServicos();
