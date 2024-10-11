# Desafio-narwal

Este repositório contém testes automatizados para o desafio de QA, utilizando Cypress para testes de front-end e back-end (API REST).

# Pré-requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados na sua máquina:

- Node.js (recomendado: versão 12 ou superior)
- npm 
- Token de autenticação para acessar a API

# Configuração do Projeto
- git clone https://github.com/vasconcelos96/desafio-narwal.git
- npm install

# Executar os Testes
- Testes Front-end
    + npx cypress open
- Testes de API
    + npx cypress run --spec cypress/e2e/api-desafio.cy.js

# Cenários de Teste
Os cenários de teste em linguagem Gherkin estão localizados na pasta feature-files,tanto para front-end quanto para back-end (API)
