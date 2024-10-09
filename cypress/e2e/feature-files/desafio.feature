Feature: Acesso à página web Narwal Sistemas

  Scenario: Carregar a página inicial com sucesso

    Given que o usuário acessa a página inicial do Narwal Sistemas
    When a página é carregada
    Then a página deve exibir o link "Home" visível

  Scenario: Validar que todos os itens do menu estão presentes e clicáveis

    Given que o usuário acessa a página inicial do Narwal Sistemas
    When o usuário interage com os itens do menu
    Then o menu deve conter os seguintes itens: "item", "Home","Clientes", "Módulos", "Integrações", "Becomex", "Soluções", "Cloud", "Vagas", "Blog"

      