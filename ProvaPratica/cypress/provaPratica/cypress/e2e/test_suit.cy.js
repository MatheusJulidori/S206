// <references <types="cypress"/>
//https://computer-database.gatling.io/computers

describe("Cenários de testes para prova parte 1", () => {

     it("Caso: Filtrar com falha -> computador inexistente", () => {

         cy.visit("https://computer-database.gatling.io/computers")
         cy.get('#searchbox').type('asdfghasdfgh')
         cy.get('#searchsubmit').click()
         cy.get('#main > h1').should('contain.text', "No computer")
     })

     it("Caso: Filtra com exito", () => {

         cy.visit("https://computer-database.gatling.io/computers")
         cy.get('#searchbox').type('acer')
         cy.get('#searchsubmit').click()
         cy.get('#main > h1').should('contain.text', "3 computers found")
     })

    it("Caso: Criar computador com sucesso", () => {

        let text = generateComputer()
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('#add').click()
        cy.get('#name').type(text)
        cy.get('.primary').click()
        cy.get('strong').should('contain.text','Done !')
    })

})

function generateComputer() {
    let computerName = "Acer Aspire5";
    return computerName 
}
