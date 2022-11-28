
Feature: Testando API Lord of The Rings

Background:
    * def url_base = "https://the-one-api.dev/v2/"
    * def token =  '3PbiMTUx_qLB7ZcjW_mG'

Scenario: Testando retorno dos livros
    Given url url_base
    And path 'book/'
    When method get
    Then status 200
    Then match $.docs[0].name == 'The Fellowship Of The Ring'
    Then match $.docs[1].name == 'The Two Towers'
    Then match $.docs[2].name == 'The Return Of The King'

Scenario: Testando retorno de ID errado de livro (Caso falso 1)
    Given url url_base
    And path 'book/1'
    When method get
    Then status 200
    Then match $.message == 'Something went wrong.'

Scenario: Testando GET em URL inválida( Caso falso 2)
    Given url url_base
    And path 'bookk/'
    When method get
    Then status 404

Scenario: Testando retorno do livro 1
    Given url url_base
    And path 'book/5cf5805fb53e011a64671582'
    When method get
    Then status 200
    Then match $.docs[0].name == 'The Fellowship Of The Ring'

Scenario: Testando retorno dos capitulos do livro 3
    Given url url_base
    And path 'book/5cf58080b53e011a64671584/chapter/'
    And header Authorization = 'Bearer ' + token
    When method get
    Then status 200
    Then match $.docs[5].chapterName == 'The Battle of the Pelennor Fields'

Scenario: Testando quotes do filme
    Given url url_base
    And path 'quote/5cd96e05de30eff6ebcce893/'
    And header Authorization = 'Bearer ' + token
    When method get
    Then status 200
    Then match $.docs[0].dialog == "We do not come to treat with Sauron, faithless and accursed. Tell your master this. The armies of Mordor must disband. He is to depart these lands, never to return."

