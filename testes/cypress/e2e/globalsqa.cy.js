/// <references <types="cypress"/>

describe("Cenários de testes para globalsqa00", () =>{

    it("Caso: Registro no site com sucesso", () =>{


        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get(".btn-link").click()
        cy.get("#firstname").type('Matheus')
        cy.get("#Text1").type('Julidori')
        cy.get("#username").type('UsuarioJulidori')
        cy.get("#password").type('SenhaJulidori')
        cy.get(".btn-primary").click()
        cy.get('.ng.binding').should('contain.text','Registration successful')
    })

    it("Caso: Registrando usuário com falha(Faltando senha)",()=> {
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get(".btn-link").click()
        cy.get("#firstname").type('Matheus')
        cy.get("#Text1").type('Julidori')
        cy.get("#username").type('UsuarioJulidori')
        cy.get("#password").clear()
        cy.get('.has-error > .help-block').should('have.text', 'Password is required')
        cy.get(".btn-primary").should('be.disabled')
    })

    it("Caso: Login no site com sucesso", () =>{
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('#username').type('UsuarioJulidori')
        cy.get('#password').type('SenhaJulidori')
        cy.get('.btn-primary').click()
        cy.get('ng-scope > p').should('contain.text',"You're logged in!!")
    })

    it("Caso: Login no site com erro", () =>{
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('#username').type('aaa')
        cy.get('#username').type('aaa')
        cy.get('.btn-primary').click()
        cy.get('.ng.binding').should('contain.text','Username or password is incorrect')
    })

    it("Caso: Registrar usuário, e fazer login com sucesso", ()=>{
        testarSite()
    })

})

function testarSite(){

    let username = "Username" + Math.floor(Math.random() * 100);
    let password = "PW" + Math.floor(Math.random() * 100);

    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get(".btn-link").click()
    cy.get("#firstname").type('AAA')
    cy.get("#Text1").type('AAA')
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get(".btn-primary").click()
    cy.get('.ng.binding').should('contain.text','Registration successful')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.btn-primary').click()
    cy.get('ng-scope > p').should('contain.text',"You're logged in!!")
}

