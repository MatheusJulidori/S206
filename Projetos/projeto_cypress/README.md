# Projeto Prático 1
## Cypress

## Preparando para executar os testes

Para executar os testes, é necessário possuir NodeJS instalado no computador, além de instalar as dependencias do projeto.
Clone o repositório, e na linha de comando, digite:

### Linux
```bash
$ git clone https://github.com/MatheusJulidori/S206
$ sudo apt install nodejs npm
$ cd S206/projeto
$ npm install
```

### MacOS
```bash
$ git clone https://github.com/MatheusJulidori/S206
$ brew install nodejs npm
$ cd S206/projeto
$ npm install
```

### Windows
Baixe e instale ![NodeJS](https://nodejs.org/en/download/)

```bash
$ git clone https://github.com/MatheusJulidori/S206
$ cd S206/projeto
$ npm install
```
## Executando os testes e gerando os relatórios

Abrindo o Cypress no app de simulação

```bash
$ ./node_modules/.bin/cypress open
```

Rodar specs por linha de comando:

```bash
$ ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'  
```

Os arquivos serão salvos na pasta 'projeto/cypress/reports' , 'projeto/cypress/screenshots' e 'projeto/cypress/videos'