# Pruebas de Regresión Visual (VRT).

Para las pruebas de VRT, se utilizará Ghost versiones 3.3.0 y 3.42.5 y para la comparación de imágenes se empleara la herramienta resemblejs.

# Usage

1. Descargue el presente pepositorio, se va hacer uso de las carpetas Puppeteer-3.3.0, Puppeteer-3.42.5 y la carpeta de Resemble.
2. Descargue el contenedor de docker con la versión 3.3.0 y 3.42.5. de Ghost mediante los siguientes comandos:<br>
sudo docker run -d --name ghost330 -e url=http://localhost:3005 -p 3005:2368 ghost:3.3.0.<br>
sudo docker run -d --name ghost342 -e url=http://localhost:3006 -p 3006:2368 ghost:3.42.5.<br>
Con ello inciará la ejecución de Ghost 3.3.0 en su máquina local en el puerto 3005 y de Ghost 3.42.5 en el puerto 3006.
3. Ingrese a la carpeta fedafajo/Puppeteer-3.3.0 y ejecute los siguientes comandos: `npm install jest-puppeteer puppeteer` y `npm install`.<br>
Debe crear un usuario en Ghost con los siguientes datos: user: test@ghost.com y password: 123456abc*.<br>
Las pruebas las corre utilizando el comando: `npm test`.
4. Ingrese a la carpeta fedafajo/Puppeteer-3.42.5 y ejecute los siguientes comandos: `npm install jest-puppeteer puppeteer` y `npm install`.<br>
Debe crear un usuario en Ghost con los siguientes datos: user: test@ghost.com y password: 123456abc*.<br>
Las pruebas las corre utilizando el comando: `npm test`.
5. Durante la ejecución de las pruebas se realizara la captura de las imagenes que seran guardaas dentro de esta carpeta en la subcarpeta results.
6. 
```
npm install resemblejs
node index.js
```
