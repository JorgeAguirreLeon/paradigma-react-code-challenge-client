describe('Verifico la pagina de producto.', ()=> {
  it('Confirmo que carga adecuadamente', ()=> {

    cy.visit('/1')
    cy.viewport(1440, 900)

    cy.get('div.ProductDetail')
      .should('exist')

    cy.get('h2.ProductDetail-item-title', {timeout: 2000})
      .should('exist')
      .should('contain','Dummy Phone #1')

   })

   it('Confirmo las etiquetas', ()=> {

     const tags = ['dummy', 'phone', 'wow']

     cy.visit('/1')
     cy.viewport(1440, 900)

     cy.get('div.ProductDetail', {timeout: 2000})
       .find('.ProductDetail-item-details-tags-tag')
       .each((tag, i)=> cy.wrap(tag).should('contain', tags[i]))

    })

    it('Confirmo el precio', ()=> {

      cy.visit('/1')
      cy.viewport(1440, 900)

      cy.get('span.ProductDetail-item-details-price-tag', {timeout: 2000})
        .should('contain','100 €')

     })
})
