🌤️ Projeto Cadastro com Clima por CEP
Um sistema web completo que combina cadastro de pessoas com consulta de endereço automática por CEP e condições climáticas da localidade.

✨ Funcionalidades
👥 Cadastro de Pessoas
📝 Dados Pessoais: Nome completo, e-mail e telefone

📮 Endereço Automático: Preenchimento automático via CEP

💾 Armazenamento: Salvar dados no localStorage do navegador

📍 Sistema de Endereço
🔍 Busca por CEP: Consulta automática à API ViaCEP

🏠 Campos Automáticos: Logradouro, bairro, cidade e estado

📍 Número: Campo para complemento do endereço

🌤️ Consulta Climática
🌡️ Temperatura em Tempo Real: Dados meteorológicos atualizados

🎨 Visualização Colorida: Cores indicativas conforme faixa de temperatura

💧 Informações Detalhadas: Umidade e condições do tempo

🔗 Integração Automática: Clima baseado na cidade do CEP informado

🎯 Fluxo do Sistema
Cadastro do Usuário:

Preencha nome, e-mail e telefone

Informe o CEP para busca automática do endereço

Complete com o número do endereço

Consulta de Endereço:

Digite o CEP (formato: XXXXX-XXX)

Sistema preenche automaticamente os campos de endereço

Consulta Climática:

Clique em "Buscar Clima pelo CEP"

Visualize temperatura colorida e condições do tempo

🎨 Sistema de Cores da Temperatura
Temperatura	Cor	Classificação
Abaixo de 15°C	🔵 Azul	Frio
15°C - 30°C	🟢 Verde	Temperatura Amena
Acima de 30°C	🔴 Vermelho	Quente
🛠️ Tecnologias Utilizadas
Frontend: HTML5, CSS3, JavaScript (ES6+)

APIs Integradas:

ViaCEP (consulta de endereços)

OpenWeatherMap (dados meteorológicos)

Estilização: CSS puro com design moderno e tema climático

Armazenamento: LocalStorage para persistência de dados

Validação: Formulários com validação client-side

📋 Estrutura de Dados do Cadastro
javascript
{
  nome: "João Silva",
  email: "joao@email.com", 
  telefone: "(11) 99999-9999",
  cep: "01234-567",
  logradouro: "Rua Exemplo",
  bairro: "Centro",
  cidade: "São Paulo", 
  uf: "SP",
  numero: "123",
  dataCadastro: "2024-01-15T10:30:00Z"
}
🚀 Como Executar o Projeto
1. Clone o repositório
bash
git clone https://github.com/seu-usuario/projeto-cadastro-clima-cep.git
cd projeto-cadastro-clima-cep
2. Configure a API Key
Obtenha uma chave gratuita em OpenWeatherMap e substitua no arquivo script.js:

javascript
const apiKey = 'SUA_CHAVE_API_AQUI';
3. Execute o projeto
Abra o arquivo index.html em seu navegador ou utilize um servidor local:

bash
# Com Python
python -m http.server 8000

# Com Node.js
npx http-server

# Com PHP
php -S localhost:8000
📁 Estrutura do Projeto
text
projeto-cadastro-clima-cep/
│
├── index.html          # Interface principal do sistema
├── style.css           # Estilos e tema visual integrado
├── script.js           # Lógica do cadastro e integração com APIs
├── README.md           # Documentação completa
└── assets/             # Recursos visuais (opcional)
🔧 Funcionalidades Técnicas
Sistema de Cadastro
javascript
// Estrutura de dados do usuário
const usuario = {
  dadosPessoais: { nome, email, telefone },
  endereco: { cep, logradouro, bairro, cidade, uf, numero },
  clima: { temperatura, descricao, umidade }
};
Integração com APIs
ViaCEP: Consulta e preenchimento automático de endereço

OpenWeatherMap: Obtenção de dados meteorológicos em tempo real

Interface do Usuário
Formulário Unificado: Cadastro pessoal + endereço + clima

Validação em Tempo Real: Formatação automática de campos

Feedback Visual: Cores e indicadores de status

💡 Recursos do Sistema
📝 Cadastro de Pessoas
Campos obrigatórios: nome, e-mail, telefone

Validação de formato de e-mail e telefone

Interface intuitiva e responsiva

🏠 Busca por CEP
Formatação automática do CEP (XXXXX-XXX)

Preenchimento instantâneo dos campos de endereço

Tratamento de erros e CEPs inválidos

🌤️ Módulo Climático
Temperatura com código de cores

Descrição das condições climáticas

Nível de umidade do ar

Integração direta com a localização do CEP

🎨 Personalização
O projeto permite customizações através do CSS:

Cores do tema: Modifique a paleta de cores

Layout: Ajuste dimensões e espaçamentos

Tipografia: Altere fontes e tamanhos

Animações: Personalize transições e efeitos

📞 Suporte e Solução de Problemas
Problemas Comuns:
API Key inválida: Verifique a chave do OpenWeatherMap

CEP não encontrado: Confirme o formato e existência do CEP

Dados não salvos: Verifique permissões do localStorage

Validações do Sistema:
✅ Formato de e-mail válido

✅ Telefone com DDD

✅ CEP no formato correto

✅ Campos obrigatórios preenchidos

🤝 Contribuições
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/NovaFuncionalidade)

Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')

Push para a branch (git push origin feature/NovaFuncionalidade)

Abra um Pull Request

🚀 Melhorias Futuras
Exportação de dados em CSV/PDF

Histórico de consultas climáticas

Múltiplos endereços por usuário

Integração com mais APIs meteorológicas

Sistema de backup em nuvem

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👥 Autores
Igo de Assis de Souza - Iassis81

🙏 Agradecimentos
ViaCEP pelo serviço de consulta de CEP

OpenWeatherMap pela API meteorológica

Comunidade de desenvolvedores por recursos e inspiração

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!
