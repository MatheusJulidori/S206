// <references <types="cypress"/>

describe("Cenários de testes para o projeto prático 1", () => {

     it("Caso: Login com falha -> Usuário não existente", () =>{

         cy.visit("https://github.com/")
         cy.get('.Button-label').click()
         cy.get('.mr-lg-3 > .HeaderMenu-link').click()
         cy.get('#login_field').type('TesteCypress')
         cy.get('#password').type('Senha')
         cy.get('.btn').click()
         cy.get('.js-flash-alert').should('contain.text',"Incorrect username or password")
     })

     it("Caso: Abrir pagina de esqueceu senha", () =>{

         cy.visit("https://github.com/")
         cy.get('.Button-label').click()
         cy.get('.mr-lg-3 > .HeaderMenu-link').click()
         cy.get('.label-link').click()
         cy.get('h1').should('contain.text','Reset your password')
         cy.get('.btn').should('be.disabled')
     })

     it("Caso: Verificando função de pesquisa", () =>{

         let text = generateUser().username
         cy.visit("https://github.com/")
         cy.get('.Button-label').click()
         cy.get('.header-search-wrapper > .form-control').type(text)
         cy.get('.jump-to-suggestion-name').should('contain.text',text)
     })

     it("Caso: Registro com email já utilizado", () =>{
         cy.visit("https://github.com/")
         cy.get('div.width-full > :nth-child(2) > .d-inline-block').click()
         cy.wait(10000)
         cy.get('#email').type('matheus_julidori@yahoo.com.br', {force: true})
         cy.get('.mb-0').should('contain.text','Email is invalid or already taken')
         cy.get('.signup-continue-button').should('be.disabled')
     })

     it("Caso: Registro com email valido e senha forte", () => {
         let user = generateUser()
         cy.visit("https://github.com/")
         cy.get('div.width-full > :nth-child(2) > .d-inline-block').click()
         cy.wait(8000)
         cy.get('#email').type(user.username+"@gmail.com")
         cy.wait(1000)
         cy.contains('Continue').click({force:true})
         cy.get('#password').type(user.password)
         cy.get('.password-validity-summary').should('contain.text','Password is strong')
         cy.get('#password-container > .flex-column > .js-continue-button').click()
         cy.wait(1000)
         cy.get('#login').type(user.username)
         cy.get('#opt-in-container > .flex-column > .js-continue-button').should('not.be.disabled')
     })

    it("Caso: Download GitHub Desktop", () => { // TESTE IRA FALHAR SE INTERNET FOR LENTA DEMAIS
        cy.visit("https://github.com/")
        cy.get(':nth-child(3) > .list-style-none > :nth-child(4) > .Link--secondary').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > [data-for-os="windows"] > p > a').click()
        cy.get('header > .container-new > :nth-child(1) > img').should('be.visible')//Forçar reload
        cy.verifyDownload('GitHubDesktopSetup-x64.msi',{timeout:100000,interval:1000})
        cy.get('header > .container-new > :nth-child(1) > img').should('be.visible')//Forçar reload
    })

})

const { createHash } = require('crypto');

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

function generateUser() {
    let username = "RandomTextForMatheusProject" + Math.floor(Math.random() * 100);
    let password = hash("RandomPassword" + Math.floor(Math.random() * 100));
    return { username, password }
}
