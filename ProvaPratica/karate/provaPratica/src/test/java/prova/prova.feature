
Feature: Testando API do Go REST para prova de S206

Background:
    * def url_base = 'https://gorest.co.in/public/v2/'
    * def token = '3100572b995df5a9b46edb4861cee3241c397cb0047e3a845106d5e82ab500f4'


Scenario: Testando retorno do usuário 1
    Given url url_base
    And path 'users/1'
    When method get
    Then status 200
    And match $ == {"id":1,"name":"Amb. Maheswar Namboothiri","email":"namboothiri_maheswar_amb@mann.net","gender":"male","status":"inactive"}

Scenario: Testando retorno de um usuário inexistente
    Given url url_base
    And path 'users/0'
    When method get
    Then status 404
    And match $.message == "Resource not found"

Scenario: Testando retorno dos post do usuário 1
    Given url url_base
    And path 'users/1/posts'
    When method get
    Then status 200
    And match $[0].title == "Aveho varietas xiphias cupressus ipsam saepe carbo et audax voluptatibus talus explicabo."

Scenario: Testando retorno de um comentario
    Given url url_base
    And path 'comments/1'
    When method get
    Then status 200
    And match $ == {"id":1,"post_id":1,"name":"Sen. Rudra Mukhopadhyay","email":"mukhopadhyay_rudra_sen@satterfield.biz","body":"Unde est et. Provident eligendi suscipit."}

Scenario: Criando usuário
    Given url url_base
    And request {"name":"matheus","gender":"male","email":"matheus@prova.inatel","status":"active"}
    And header Authorization = 'Bearer ' + token
    And path 'users'
    When method post
    Then status 201
    #ALTERAR EMAIL TODA VEZ QUE RODAR, PARA NÃO DAR ERRO POR CRIAR USUÁRIO COM MESMO EMAIL