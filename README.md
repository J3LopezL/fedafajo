# Grupo de trabajo

## Pruebas de extremo a extremo utilizando las herramientas Kraken y Puppeteer.

| Nombre                        | email                      |
| ----------------------------- | -------------------------- |
| Daniel García                 | df.garcia@uniandes.edu.co  |
| Fabio Julian Bernal Tibavisco | f.bernal@uniandes.edu.co   |
| Félix Edilson Acero Joya      | acerofel@uniandes.edu.co   |
| José Libardo López Lesmes     | jl.lopez77@uniandes.edu.co |

Repositorio pruebas E2E MISO 2021.

## Configuración del ambiente de ejecución

Prerequisitos:
- Instalar la última versión de Docker desde https://www.docker.com/get-started

### 1. Configuración de Ghost

- Abrir una terminal de ejecución de comandos y ejecutar el siguiente comando `docker run -d --name ghost -e url=http://localhost:3001 -p 3001:2368 ghost:3.3.0`. Tener en cuenta que el puerto `3001` no se encuentre en uso. De otro modo cambiarlo por alguno libre, tanto en la URL como en el puerto que se expone. p. ejem. `docker run -d --name ghost -e url=http://localhost:5000 -p 5000:2368 ghost:3.3.0` se cambió al puerto `5000`

- Abrir un navegador con la URL `http://localhost:3001/ghost` y crear un usuario inicial con los siguientes parametros
- E-mail: `test@ghost.com`
- Password: `123456abc*`

### 2. Configuración y ejecución de las pruebas en Puppeteer

Dado que el proyecto contiene el código de las pruebas desarrolladas con ambas herramientas, con el fin de ejecutar la suite de pruebas de Puppeteer, es necesario localizar la terminal en el directorio *fedafajo/Puppeteer*. Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas: 

```
npm install
npm test
```

### 3. Configuración y ejecución de las pruebas en Kraken

Dado que el proyecto contiene el código de las pruebas desarrolladas con ambas herramientas, con el fin de ejecutar la suite de pruebas de Puppeteer, es necesario localizar la terminal en el directorio *fedafajo/Kraken*. Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas:

```
TODO: comandos de preparación en Kraken
```

### [Funcionalidades](https://github.com/J3LopezL/fedafajo/wiki/FuncionalidadesProbadas)

### [Escenarios](https://github.com/J3LopezL/fedafajo/wiki/Escenariospruebas)
