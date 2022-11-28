# Projeto Prático 2
## Karate

## Preparando para executar os testes

Para executar os testes, é necessário possuir Java e Maven instalado no computador, além de instalar as dependencias do projeto.
Clone o repositório, e na linha de comando, digite:

### Linux
```bash
$ git clone https://github.com/MatheusJulidori/S206
$ sudo apt install default-jdk
$ sudo apt-get install maven
$ cd S206/Projetos/projeto_karate/projeto
$ mvn clean install
```

### MacOS
```bash
$ git clone https://github.com/MatheusJulidori/S206
$ brew install default-jdk
$ brew install maven
$ cd S206/Projetos/projeto_karate/projeto
$ mvn clean install
```

### Windows
Baixe e instale ![Java](https://www.oracle.com/java/technologies/downloads/) 
Baixe e instale ![Maven](https://maven.apache.org/download.cgi)

```bash
$ git clone https://github.com/MatheusJulidori/S206
$ cd S206/Projetos/projeto_karate/projeto
$ mvn clean install
```
## Executando os testes e gerando os relatórios


Executar um teste a partir do Runner ou suíte:

```bash
$ mvn test –Dtest=lotrRunner
```
