# Grupo de trabajo


| Nombre                        | email                      |
| ----------------------------- | -------------------------- |
| Daniel García                 | df.garcia@uniandes.edu.co  |
| Fabio Julian Bernal Tibavisco | f.bernal@uniandes.edu.co   |
| Félix Edilson Acero Joya      | acerofel@uniandes.edu.co   |
| José Libardo López Lesmes     | jl.lopez77@uniandes.edu.co |

Repositorio pruebas E2E MISO 2021.

## Pruebas de extremo a extremo utilizando las herramientas Kraken y Puppeteer.

## Configuración del ambiente de ejecución

Prerequisitos:
- Instalar la última versión de Docker desde https://www.docker.com/get-started
- Si ya tiene instalado Docker, verificar que no tenga un contenedor ejecutando en los puertos `3001` y `3002`, de ser así detenerlos o eliminarlos.

## Clone este repositorio en su equipo.

# 1. Configuración de Ghost

- Abrir una terminal y ejecutar los siguientes comandos:
  - `docker run -d --name ghost3.42.5 -e url=http://localhost:3002 -p 3002:2368 ghost:3.42.5`, contenedor con Ghost v 3.42.5
   - Tener en cuenta que el puerto `3002` de su maquina local no se encuentre en uso.

```
Comando para docker, pueden requirir privilegios:

- Detener contenedor: docker stop ghost3.3.0 o ghost3.3.0
- Reiniciar el contenedor: docker start ghost3.3.0 o ghost3.3.0
- Comado para borrar el contenedor, debe estar parado: docker rm ghost3.3.0 o ghost3.3.0
- Ver contenedores en ejecución: docker ps -a
```

### Nota: Es importante que el contendedor se encuentre en ejecución al momento de ejecutar las pruebas:


# 2. Configuración y ejecución de las pruebas en Puppeteer

Las pruebas se encuentran en el diretorio fedafajo. Para ejecutar la suite de pruebas de Puppeteer, es necesario localizar la terminal en el directorio *fedafajo/Semana7*. Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas: 

```
npm install
npm run test:user
npm run test:tag
npm run test:post
npm run test:page
npm run test:login

```

### Nota 1: El comando `npm run test:user`, anteriormente especificado como paso de ejecución, se encarga de probar el flujo de creación de usuario con varios datos y al final de este creará el usuario utilizado por las demás pruebas. Si al ejecutar los demás comando se presenta un problema de inicio de sesión realizar el siguiente procedimiento para la creación del usuario:

Abrir un navegador con la URL http://localhost:3002/ghost y crear un usuario inicial con los siguientes parametros:

- E-mail: test@ghost.com
- Password: 123456abc*

### Nota 2: En la versión 3.42.5 se encontró una incidencia al momento de cerrar sesión al finalizar cada escenario de pruebas que cerraba abruptamente la ejecución de la prueba. Se creó la configuración para cada funcionalidad para que sea ejecutada independientemente de la siguiente forma:


#### [Funcionalidades](https://github.com/J3LopezL/fedafajo/wiki/FuncionalidadesProbadas)
#### [Escenarios](https://github.com/J3LopezL/fedafajo/wiki/Escenarios-pruebas)
#### [120 Casos de prueba](https://github.com/J3LopezL/fedafajo/wiki/120-Escenarios)
