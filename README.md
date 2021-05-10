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

- Abrir una terminal y ejecutar el siguiente comando `docker run -d --name ghost -e url=http://localhost:3001 -p 3001:2368 ghost:3.3.0`. Tener en cuenta que el puerto `3001` no se encuentre en uso.

```
Comando para docker, pueden requirir privilegios:

- Detener contenedor: docker stop ghost
- Reiniciar el contenedor: docker start ghost
- Comado para borrar el contenedor, debe estar parado: docker rm ghost
```

- Abrir un navegador con la URL `http://localhost:3001/ghost` y crear un usuario inicial con los siguientes parametros:
- E-mail: `test@ghost.com`
- Password: `123456abc*`

o

- Abrir el directorio que contiene las pruebas (fedafajo/Puppeteer/src/integration) y habiltar la prueba a.spe.js renombrandola Ejm. a.espec.js y quitando o desabiltando las otras pruebas para que se ejecute sola y cree el usuario administrador y despues corrarla o volver a deshabilitarla y dejat solo las demás pruebas.

### Nota: Es importante que el contendedor creado se encuentre en ejecución al momento de ejecutar las pruebas

### 2. Configuración y ejecución de las pruebas en Puppeteer

Las pruebas se encuentran en el diretorio fedafajo. Para ejecutar la suite de pruebas de Puppeteer, es necesario localizar la terminal en el directorio *fedafajo/Puppeteer*. Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas: 

```
npm install
npm test
```

### 3. Configuración y ejecución de las pruebas en Kraken

Las pruebas se encuentran en el diretorio fedafajo. Para ejecutar la suite de pruebas de Kraken, es necesario localizar la terminal en el directorio *fedafajo/Kraken*. Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas:

```
export ANDROID_HOME="/usr/lib/android-sdk/"
export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"

Las pruebas se corren con el comando:

kraken-mobile run

Los resultados deben aparecer en la carpetar resports del directorio Kraken.

Si no funciona lo anterior...
```
TODO: ejecutar los comandos de preparación en Kraken suministrados pare el curso.
```

### [Funcionalidades](https://github.com/J3LopezL/fedafajo/wiki/FuncionalidadesProbadas)

### [Escenarios](https://github.com/J3LopezL/fedafajo/wiki/Escenariospruebas)
