Feature: Acesso à página web Narwal Sistemas

  Scenario: Carregar a página inicial com sucesso

    Given que o usuário acessa a página inicial do Narwal Sistemas
    When a página é carregada
    Then a página deve exibir o link "Home" visível

  Scenario: Validar que todos os itens do menu estão presentes e clicáveis

    Given que o usuário acessa a página inicial do Narwal Sistemas
    When o usuário interage com os itens do menu
    Then o menu deve conter os seguintes itens: "item", "Home","Clientes", "Módulos", "Integrações", "Becomex", "Soluções", "Cloud", "Vagas", "Blog"
    And cada item deve ser clicável e redirecionar para a página correta


Feature: Gerenciamento de Repositórios e Issues do GitHub
    
  Background:
    Given que um token do GitHub válido está disponível

  Scenario: Criar um novo repositório
    When eu criar um repositório com nome "Desafio-Narwal-{timestamp}" e descrição "Repositório criado via Postman"
    Then o status da resposta deve ser 201
    And a resposta deve conter "id", nome e descrição corretos

  Scenario: Obter os detalhes do repositório
    Given que eu criei um repositório
    When eu obter os detalhes do repositório
    Then o status da resposta deve ser 200
    And a resposta deve ter o nome e o proprietário corretos

  Scenario: Criar uma nova issue
    Given que eu criei um repositório
    When eu criar uma issue com título "Primeira Issue" e corpo "Essa é uma issue criada via Postman"
    Then o status da resposta deve ser 201
    And a resposta deve conter "id", título e corpo corretos

  Scenario: Consultar issues do repositório
    Given que eu criei um repositório
    When eu obter as issues do repositório
    Then o status da resposta deve ser 200
    And a resposta deve ser um array com pelo menos uma issue

  Scenario: Deletar o repositório
    Given que eu criei um repositório
    When eu deletar o repositório
    Then o status da resposta deve ser 204

  Scenario: Confirmar a deleção do repositório
    Given que eu deletei o repositório
    When eu tentar obter os detalhes do repositório
    Then o status da resposta deve ser 404
     
