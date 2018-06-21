describe('Verifico la pagina de inicio.', ()=> {
  it('Confirmo que carga adecuadamente', ()=> {

    cy.visit('/')
    cy.viewport(1440, 900)

    cy.get('div.ProductList')
      .children('div.ProductList-item')
      .should('have.length', 2)

    cy.get('div.ProductList')
      .children('div.ProductList-item')
      .first()
      .find('h2.ProductList-item-title')
      .should('contain','Dummy Phone #1')

   })

   it('Confirmo que redirige adecuadamente', ()=> {

     cy.visit('/')
     cy.viewport(1440, 900)

     cy.get('div.ProductList')
       .children('div.ProductList-item')
       .first()
       .click()

      cy.url().should('contain', '/1')

    })
})
