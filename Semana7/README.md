# Grupo de trabajo

## Pruebas de extremo a extremo utilizando la herramienta Puppeteer.
## 120 Escenarios sobre Ghost v3.42.5

| Nombre                        | email                      |
| ----------------------------- | -------------------------- |
| Daniel García                 | df.garcia@uniandes.edu.co  |
| Fabio Julian Bernal Tibavisco | f.bernal@uniandes.edu.co   |
| Félix Edilson Acero Joya      | acerofel@uniandes.edu.co   |
| José Libardo López Lesmes     | jl.lopez77@uniandes.edu.co |

Repositorio pruebas E2E MISO 2021.

## Configuración del ambiente de ejecución.

Prerequisitos:

- Instalar la última versión de Docker desde https://www.docker.com/get-started
- Si ya tiene instalado Docker, verificar que no tenga un contenedor ejecutando en el puerto `3002`, de ser así detenerlo o eliminarlo.

## Clone este repositorio en su equipo.

# 1. Configuración de Ghost

- Abrir una terminal y ejecutar los siguientes comandos (se recomida utilizar Ubuntu):

  - `docker run -d --name ghost -e url=http://localhost:3002 -p 3002:2368 ghost:3.42.5`, contenedor con Ghost versión 3.42.5
  - Tenga en cuenta que esta configuración ejecuta una instalación de Ghost 3.42.5 desde cero en el puerto `3002` de su maquina local.


- En la terminal, sobre el directroior (`fedafajo/Semana7/`) haga la instalación de los modulos de jest y puppeteer:
    
    - npm install jest-puppeteer puppeteer

```
Comando para docker, el linux necesitan privilegios (sudo):

- Instalar contenedor con Ghost: sudo docker run -d --name ghost -e url=http://localhost:3002 -p 3002:2368 ghost:3.42.5
- Detener contenedor: sudo docker stop ghost
- Reiniciar el contenedor: sudo docker start ghost
- Borrar el contenedor, debe estar detenido: sudo docker rm ghost
- Ver contenedores en ejecución: sudo docker ps -a
```

### Nota: El contendedor debe estar en ejecución al momento de realizar las pruebas.

# 2. Configuración y ejecución de las pruebas en Puppeteer

Las pruebas se encuentran en el diretorio fedafajo/Semana7. Para ejecutar la suite de pruebas se debe instalar Puppeteer, una vez en el directorio *fedafajo/Semana7*, se deben ejecutar los siguientes comandos: 

```
npm install jest-puppeteer puppeteer
```

- Las pruebas estan realizadas en puppeteer y se lo mejor es ejecutarlas en forma independiente, en todo caso de debe ejecutar en primera instancia la prueba `user` que el final crea el usuario que se va utilizar en las demas pruebas.

```
npm run test:user
npm run test:login
npm run test:tag
npm run test:post
npm run test:page

```
Nota: - los escenarios se pueden ejcutar mediante un script shell, mediante el comando: sh escenarios.sh
