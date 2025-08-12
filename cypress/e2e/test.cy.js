describe('tester de formulario', () => {

  it('Llenar campos con usuario', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('teste')
    cy.get('input[placeholder="Enter EMail"]').type('teste@gmail.com')
    cy.get('#phone').type('123456')
      
  })

   it('Enviar archivos', () => {
    //cy.visit('https://testautomationpractice.blogspot.com/')
  })

 })
