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

## Clone este repositorio en su equipo.

### 1. Configuración de Ghost

- Abrir una terminal y ejecutar los siguientes comandos:
 `docker run -d --name ghost3.3.0 -e url=http://localhost:3001 -p 3001:2368 ghost:3.3.0`, contenedor con Ghost v 3.3.0
 `docker run -d --name ghost3.42.5 -e url=http://localhost:3002 -p 3002:2368 ghost:3.42.5`, contenedor con Ghost v 3.42.5

 . Tener en cuenta que los puertos `3001` y `3002` de su maquina local no se encuentren en uso.

- Abrir un navegador con la URL `http://localhost:3001/ghost` y `http://localhost:3002/ghost` y crear un usuario inicial con los siguientes parametros:
- E-mail: `test@ghost.com`
- Password: `123456abc*`

o

- Abrir el directorio que contiene las pruebas (fedafajo/Puppeteer-3.3.0/src/integration) y habiltar la prueba a.spe.js renombrandola Ejm. a.espec.js y quitando o desabiltando las otras pruebas para que se ejecute sola y cree el usuario administrador y después borrar o deshabilitarla y dejar las demás pruebas.

- Abrir el directorio que contiene las pruebas (fedafajo/Puppeteer-3.42.5/src/integration) y habiltar la prueba a.spe.js renombrandola Ejm. a.espec.js y quitando o desabiltando las otras pruebas para que se ejecute sola y cree el usuario administrador y después borrar o deshabilitarla y dejar las demás pruebas.
```

Comando para docker, pueden requirir privilegios:

- Detener contenedor: docker stop ghost3.3.0 o ghost3.3.0
- Reiniciar el contenedor: docker start ghost3.3.0 o ghost3.3.0
- Comado para borrar el contenedor, debe estar parado: docker rm ghost3.3.0 o ghost3.3.0
- Ver contenedores en ejecución: docker ps -a
```

### Nota: Es importante que el contendedor se encuentre en ejecución al momento de ejecutar las pruebas:


### 2. Configuración y ejecución de las pruebas en Puppeteer

Las pruebas se encuentran en el diretorio fedafajo. Para ejecutar la suite de pruebas de Puppeteer, es necesario localizar la terminal en el directorio *fedafajo/Puppeteer-3.3.0* y *fedafajo/Puppeteer-3.42.5* . Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas: 

```
npm install jest-puppeteer puppeteer
npm install
npm test

Los resultados deben aparecer en la carpeta Results del directorio fedafajo.
```

### 3. Configuración y ejecución de las pruebas en Kraken

```
Debe estar en ejecución el contendor.
Debe estar creado el usuario administrador en la correspondiente versión de Ghost.
```

Las pruebas se encuentran en el diretorio fedafajo. Para ejecutar la suite de pruebas de Kraken, es necesario localizar la terminal en el directorio *fedafajo/Kraken3.3.0* y *fedafajo/Kraken3.42.5*. Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas:

```
export ANDROID_HOME="/usr/lib/android-sdk/"
export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"

Las pruebas se corren con el comando:

kraken-mobile run

Los resultados deben aparecer en la carpeta resports del directorio fedafajo.

Si no funciona lo anterior...
```
TODO: ejecutar los comandos de preparación en Kraken suministrados para el curso.

#### [Funcionalidades](https://github.com/J3LopezL/fedafajo/wiki/FuncionalidadesProbadas)
#### [Escenarios](https://github.com/J3LopezL/fedafajo/wiki/Escenarios-pruebas)
