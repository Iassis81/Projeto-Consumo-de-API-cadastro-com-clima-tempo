function limparCampos() {
    document.getElementById('logradouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}
function buscarEndereco() {
    const cepInput = document.getElementById('cep');
    // 1. Limpa o CEP: remove caracteres não numéricos.
    const cep = cepInput.value.replace(/\D/g, '');
    // URL da API ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    limparCampos(); // Limpa antes de uma nova busca
    // Validação básica do CEP (apenas 8 dígitos)
    if (cep.length !== 8) {
        alert("CEP inválido! Digite 8 números.");
        return;
    }
    // 2. Requisição com 'fetch' (Retorna uma Promise)
    fetch(url)
        .then(response => response.json()) // Primeira Promise: Converte a resposta para JSON
        .then(dados => { // Segunda Promise: Manipula os dados recebidos
            if (dados.erro) {
                // CEP não encontrado (campo "erro" = true no JSON)
                alert("CEP não encontrado na base de dados do ViaCEP.");
            } else {
                // 3. Preenche os campos do formulário
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade; // localidade é a cidade
                document.getElementById('uf').value = dados.uf;
                document.getElementById('numero').focus(); // Foca no campo 'Número' para o usuário continuar
            }
        })
        .catch(error => { // Trata erros de conexão ou do fetch
            console.error('Erro na requisição da API:', error);
            alert("Ocorreu um erro ao consultar o CEP. Tente novamente mais tarde.");
        });
}
async function buscarClima() {
    const cidade = document.getElementById('cidade').value;
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=5a5f074b4bd6d0523bdaf8c04f879ed2&lang=pt_BR`);
        const dados = await resposta.json();

        let temperatura = (dados.main.temp - 273.15).toFixed(2); // Converte para Celsius
        let descricao = dados.weather[0].description;
        let umidade = dados.main.humidity; // ✅ nova variável

        document.getElementById('temperatura').textContent = `Temperatura: ${temperatura}°C`;
        document.getElementById('descricao').textContent = `Descrição: ${descricao}`;
        document.getElementById('umidade').textContent = `Umidade: ${umidade}%`; // ✅ nova linha adicionada aqui

    } catch (erro) {
        console.log('Erro:', erro);
        alert('Erro ao buscar dados. Tente novamente.');
    } finally {
        loadingElement.style.display = 'none'; // Sempre esconde o loading
    }
}
