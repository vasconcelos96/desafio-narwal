
describe('Acesso à página web Narwal Sistemas', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve carregar a página inicial com sucesso', () => {

    cy.get('a.elementor-item.elementor-item-active[href="https://www.narwalsistemas.com.br/"]')
      .contains('Home')

      .should('be.visible')
  }),

it('Deve validar que todos os itens do menu estão presentes e clicaveis', () => {
  const menuItems = [
    'Home',
    'Clientes',
    'Módulos',
    'Integrações',
    'Becomex',
    'Soluções',
    'Cloud',
    'Vagas',
    'Blog'
  ]

  menuItems.forEach((item, index) => {
    cy.get(`nav[aria-label="Menu"] > ul > li`).eq(index)
      .should('contain', item)
      .click()
  })
})

})
