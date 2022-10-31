/// <references <types="cypress"/>

describe("Cenários de testes para o projeto prático 1", () =>{

    // it("Caso: Login com falha -> Usuário não existente", () =>{

    //     cy.visit("https://github.com/")
    //     cy.get('.Button-label').click()
    //     cy.get('.mr-lg-3 > .HeaderMenu-link').click()
    //     cy.get('#login_field').type('TesteCypress')
    //     cy.get('#password').type('Senha')
    //     cy.get('.btn').click()
    //     cy.get('.js-flash-alert').should('contain.text',"Incorrect username or password")
    // })

    // it("Caso: Abrir pagina de esqueceu senha", () =>{

    //     cy.visit("https://github.com/")
    //     cy.get('.Button-label').click()
    //     cy.get('.mr-lg-3 > .HeaderMenu-link').click()
    //     cy.get('.label-link').click()
    //     cy.get('h1').should('contain.text','Reset your password')
    //     cy.get('.btn').should('be.disabled')
    // })

    it("Caso: Verificando função de pesquisa", () =>{

        let text = "RandomText" + Math.floor(Math.random() * 100);
        cy.visit("https://github.com/")
        cy.get('.Button-label').click()
        cy.get('.header-search-wrapper > .form-control').type(text)
        cy.get('.jump-to-suggestion-name').should('contain.text',text)
    })

})
