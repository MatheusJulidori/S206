Feature: Testando API do Star Wars

Scenario: Testando retorno people/1/
    Given url "https://swapi.dev/api/people/1/"
    When method get
    Then status 200

Scenario: Testando retorno people/1/1234
    Given url "https://swapi.dev/api/people/1/1234"
    When method get
    Then status 404

Scenario: Testando retorno people/1/1234
    Given url "https://swapi.dev/api/planets"
    When method get
    Then status 200

Scenario: Testando retorno people/1/1234
    Given url "https://swapi.dev/api/planets/1"
    When method get
    Then status 200
