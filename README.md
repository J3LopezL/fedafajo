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
- Si ya tiene instalado Docker, verificar que no tenga un contenedor ejecutando en los puertos `3001` y `3002`, de ser así detenerlos o eliminarlos.

## Clone este repositorio en su equipo.

# 1. Configuración de Ghost

- Abrir una terminal y ejecutar los siguientes comandos:
  - `docker run -d --name ghost3.3.0 -e url=http://localhost:3001 -p 3001:2368 ghost:3.3.0`, contenedor con Ghost v 3.3.0
  - `docker run -d --name ghost3.42.5 -e url=http://localhost:3002 -p 3002:2368 ghost:3.42.5`, contenedor con Ghost v 3.42.5
   - Tener en cuenta que los puertos `3001` y `3002` de su maquina local no se encuentren en uso.

- Abrir un navegador con la URL `http://localhost:3001/ghost` y crear un usuario inicial con los siguientes parametros:
 - E-mail: `test@ghost.com`
 - Password: `123456abc*`
- Repetir los pasos anteriores para el sitio ubicado en `http://localhost:3002/ghost`

o

- Abrir el directorio que contiene las pruebas (`fedafajo/Puppeteer-3.3.0/src/integration`) y habiltar la prueba `a.spe.js` renombrandola por `a.espec.js`, abra una terminal y ejecute el comando: `npm run test:crear`. El cual creará el usuario.

- Abrir el directorio que contiene las pruebas (`fedafajo/Puppeteer-3.42.5/src/integration`) y habiltar la prueba `a.spe.js` renombrandola por `a.espec.js`, abra una terminal y ejecute el comando: `npm run test:crear`. El cual creará el usuario.

```
Comando para docker, pueden requirir privilegios:

- Detener contenedor: docker stop ghost3.3.0 o ghost3.3.0
- Reiniciar el contenedor: docker start ghost3.3.0 o ghost3.3.0
- Comado para borrar el contenedor, debe estar parado: docker rm ghost3.3.0 o ghost3.3.0
- Ver contenedores en ejecución: docker ps -a
```

### Nota: Es importante que el contendedor se encuentre en ejecución al momento de ejecutar las pruebas:


# 2. Configuración y ejecución de las pruebas en Puppeteer

Las pruebas se encuentran en el diretorio fedafajo. Para ejecutar la suite de pruebas de Puppeteer, es necesario localizar la terminal en el directorio *fedafajo/Puppeteer-3.3.0* y *fedafajo/Puppeteer-3.42.5* . Una vez en este punto, se deben ejecutar los siguientes comandos para desplegar los escenarios de pruebas: 

```
npm install
npm test

Los resultados deben aparecer en la carpeta Results del directorio fedafajo.
```

### Nota: En la versión 3.3.0 ejecutar el comando `npm test` ejecutará las pruebas y creará las imagenes para los escenarios que se encuentran configurados. En la versión 3.42.5 se encontró una incidencia al momento de cerrar sesión al finalizar cada escenario de pruebas que cerraba abruptamente la ejecución de la prueba. Se creó la configuración para cada funcionalidad para que sea ejecutada independientemente de la siguiente forma:

```
npm run test:user
npm run test:tag
npm run test:page
npm run test:post
npm run test:edit

```

# 3. Configuración y ejecución de las pruebas en Kraken

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

# 4. Resemble

Haciendo uso del terminal abrir la carpeta `Resemble` y ejecutar el comando `npm install`, al finalizar ejecutar el comando `node index` para la generación del reporte. El reporte se puede ver en la ruta: `./Resemble/reports/{HoraEjecución}/report.html`

Dentro del repositorio en la ruta de `/reports` puede encontrar la ejecución de reportes previamente ejecutados.

TODO: ejecutar los comandos de preparación en Kraken suministrados para el curso.

#### [Funcionalidades](https://github.com/J3LopezL/fedafajo/wiki/FuncionalidadesProbadas)
#### [Escenarios](https://github.com/J3LopezL/fedafajo/wiki/Escenarios-pruebas)
