Feature: Testando API do Pokemon

Background: Executa antes de cada teste
    *def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno 
    Given url "https://pokeapi.co/api/v2/pokemon/1"
    When method get
    Then status 200

Scenario: Testando retorno invalido
    Given url "https://pokeapi.co/api/v2/pokemon/chocolate"
    When method get
    Then status 404

Scenario: Testando retorno pikachu e verificando o JSON
    Given url url_base
    And path 'pokemon/pikachu'
    When method get
    Then status 200
    And match reponse.name == "pikachu"
    and match response.id = 25

Scenario: testando retorno pokemon Red entrando em um dos elementos do array de idiomas e testando o retorno do JSON
    Given: url url_base
    and path 'version/1/'
    When method get
    Then status 200
    And def idioma = $.names[5].url
    And print idiomas
    And url idioma
    Wehn method get
    Then status 200
    Then match response.name == 'es'
    And match response.id == 7


