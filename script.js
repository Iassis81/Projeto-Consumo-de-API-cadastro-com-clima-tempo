
async function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        alert('CEP inválido!');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
            alert('CEP não encontrado!');
            return;
        }
        
        document.getElementById('logradouro').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('uf').value = data.uf || '';
        
    } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        alert('Erro ao buscar endereço!');
    }
}


async function buscarClima() {
    const cidade = document.getElementById('cidadeClima').value;
    if (!cidade) {
        alert('Por favor, digite uma cidade!');
        return;
    }
    await buscarClimaPorCidade(cidade);
}


async function buscarClimaPorCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        alert('Por favor, digite um CEP válido primeiro!');
        return;
    }

    
    document.getElementById('loading').style.display = 'block';
    
    try {
        
        const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const enderecoData = await viaCepResponse.json();
        
        if (enderecoData.erro) {
            alert('CEP não encontrado!');
            return;
        }
        
        const cidade = enderecoData.localidade;
        const uf = enderecoData.uf;
        
        
        await buscarClimaPorCidade(cidade, uf);
        
    } catch (error) {
        console.error('Erro ao buscar clima:', error);
        alert('Erro ao buscar informações do clima!');
    } finally {
       
        document.getElementById('loading').style.display = 'none';
    }
}


function definirCorTemperatura(temperatura, elemento) {
 
    elemento.classList.remove('temp-fria', 'temp-moderada', 'temp-quente');
   
    if (temperatura < 15) {
        elemento.classList.add('temp-fria'); 
    } else if (temperatura >= 15 && temperatura <= 30) {
        elemento.classList.add('temp-moderada'); 
    } else {
        elemento.classList.add('temp-quente');     }
}


async function buscarClimaPorCidade(cidade, uf = '') {
    try {
      
        const apiKey = '5a5f074b4bd6d0523bdaf8c04f879ed2';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&units=metric&lang=pt_br&appid=${apiKey}`
        );
        
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        
        const data = await response.json();
        const temperatura = Math.round(data.main.temp);
        const elementoClima = document.getElementById('temperatura');
        
       
        elementoClima.textContent = `Temperatura: ${temperatura}°C`;
        elementoClima.innerHTML = `Temperatura: <span class="temp-value">${temperatura}°C</span>`;
        
        
        definirCorTemperatura(temperatura, elementoClima);
        
        document.getElementById('descricao').textContent = `Condição: ${data.weather[0].description}`;
        document.getElementById('umidade').textContent = `Umidade: ${data.main.humidity}%`;
        
    } catch (error) {
        console.error('Erro ao buscar clima:', error);
        alert('Erro ao buscar informações do clima!');
    }
}


async function buscarClimaPorCidadeBrasil(cidade) {
    try {
       
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true`);
       
        
        const data = await response.json();
        const temperatura = data.current_weather.temperature;
        const elementoClima = document.getElementById('temperatura');
        
       
        elementoClima.innerHTML = `Temperatura: <span class="temp-value">${temperatura}°C</span>`;
        
        
        definirCorTemperatura(temperatura, elementoClima);
        
        document.getElementById('descricao').textContent = `Condição: ${data.current_weather.weathercode}`;
        
    } catch (error) {
        console.error('Erro ao buscar clima:', error);
        alert('Erro ao buscar informações do clima!');
    }
}


document.getElementById('btnSalvar').addEventListener('click', function() {
    
    alert('Dados salvos com sucesso!');
});

document.getElementById('btnLimpar').addEventListener('click', function() {
    localStorage.clear();
    alert('Local Storage limpo!');
});


document.getElementById('cep').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});