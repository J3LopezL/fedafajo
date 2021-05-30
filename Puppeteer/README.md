# Jest Puppeteer Ghost 3.42.5

1. Descargue el presente repositorio y utilice la presente carpeta fedafajo/Puppeteer.
2. Descargue el contenedor de docker con la versión 3.42.5. de Ghost mediante el siguiente comando:<br> `sudo docker run -d --name ghost3.42.5 -e url=http://localhost:3001 -p 3001:2368 ghost:3.42.5.` <br> Con ello inciará la ejecución de Ghost en su máquina local en el puerto 3001.
3. Una vez dentro de la carpeta fedafajo/Puppetee, ejecute el siguientes comandos: `npm install jest-puppeteer puppeteer` y `npm install`.
4. Debe crear un usuario en Ghost con los siguientes datos: `user: test@ghost.com y password: 123456abc*`.
5. Las pruebas las corre utilizando el comando `npm test`.
6. Los resultados de las pruebas los puede visualizar en la consola.
