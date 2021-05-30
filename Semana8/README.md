# RIPuppet
Una herramienta para realializar pruebas de reconocimiento.

# View

Para visualizar la información del reporte archivado, descargue el presente repositorio y vaya a la carpeta `fedafajo/Semana8/results/2021-05-27T19.01.15.507Z/chromium/` y ejecute el siguiente comando `http-server` ingrese a la dirección y puerto instanciados y podra los resultados.

# Executing

1. Las pruebas e instrucciones corresponden para una distribución Linux Ubutu 20.04 o superior.
2. Descargue el contenedor docker con la versión 3.24.5 de Ghost, utilizando el siguiente comando:<br>` sudo docker run -d --name ghost3.42.5 -e url=http://localhost:3000 -p 3000:2368 ghost:3.42.5`<br> Ejecutará Ghost en su equipo local en el puerto 3002.
3. Descargue el presente repositorio y ubiquese en la carpeta Semana8. <br>El archivo `config.json` tiene la configuración para crear e iniciar sesión en Ghost.<br>Ejecute el comando `npm install` para instalar las dependencias reueridas.<br>La herramienta realiza las pruebas exploratorias con un nivel de profundidad 3.
4. Ejecute el siguiente comando para iniciar la prueba:<br> `node index.js`
5. Los resultados de la pruebas tras culminar su ejecución serán almacenados en la carpera results. En una capeta correspondiente a la estampa de tiempo.
6. Para visualizar los resultados vaya a la carpeta de resultados, directroio que creo su prueba y dentro del directorio `chromium` ejecute el comando `npm install -g http-server` y después ejecute el comando `http-server` que genera un servicio en el puerto 8080 de su máquina local.
7. Ingrese al sitio y puerto que le indica una vez ejecute el comando y podrá ver los resultados obtenidos por la herramienta.
