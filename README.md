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

### 1. Configuración de Ghost

Para el proceso de ejecución de las pruebas contenidas en este proyecto se debe utilizar Ghost v.3.3.0. Adicionalmente, es necesario crear con antelación un usuario administrador con las credenciales:

E-mail: test@ghost.com

Password: 123456abc*

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

## Funcionalidades y escenarios de prueba

### 1. Inicio de sesión

### 2. Crear Post

### 3. Crear Page

### 4. Crear Tag

#### 4.1. Creación de un Tag con nombre, slug y descripción

Descripción: Para este escenario, se debe iniciar sesión con las credenciales establecidas, ir a la sección Tags, dar click en crear Tag, diligenciar los campos asociados al nombre (con contenido), slug (con contenido) y descripción (con contenido). Finalmente, se debe dar click en la opción "Save" para guardar el Tag, revisar los resultados esperados y cerrar la sesión en Ghost.
 
Resultados esperados: Tras la ejecución del procedimiento de creación, al revisar la sección Tags, se espera tener un nuevo elemento con el nombre y slug correspondiente al Tag recién creado.

#### 4.2. Creación de un Tag con espacios en el nombre, slug y descripción

Descripción: Para este escenario, se debe iniciar sesión con las credenciales establecidas, ir a la sección Tags, dar click en crear Tag, diligenciar los campos asociados al nombre (cadena de texto con espacios), slug (con contenido) y descripción (con contenido). Finalmente, se debe dar click en la opción "Save" para guardar el Tag, revisar los resultados esperados y cerrar la sesión en Ghost.
 
Resultados esperados: Tras la ejecución del procedimiento de creación, al revisar la sección Tags, se espera que no exista ningún elemento con el nombre y slug correspondiente al Tag que se acaba de intentar crear.

#### 4.3. Creación de un Tag con nombre vacío, slug con contenido y descripción vacía

Descripción: Para este escenario, se debe iniciar sesión con las credenciales establecidas, ir a la sección Tags, dar click en crear Tag, diligenciar los campos asociados al nombre (cadena vacía), slug (con contenido) y descripción (con contenido). Finalmente, se debe dar click en la opción "Save" para guardar el Tag, revisar los resultados esperados y cerrar la sesión en Ghost.
 
Resultados esperados: Tras la ejecución del procedimiento de creación, al revisar la sección Tags, se espera que no exista ningún elemento con el nombre y slug correspondiente al Tag que se acaba de intentar crear.

#### 4.4. Creación de un Tag con descripción inválida (más de 500 caracteres)

Descripción: Para este escenario, se debe iniciar sesión con las credenciales establecidas, ir a la sección Tags, dar click en crear Tag, diligenciar los campos asociados al nombre (con contenido), slug (con contenido) y descripción (con más de 500 caracteres). Finalmente, se debe dar click en la opción "Save" para guardar el Tag, revisar los resultados esperados y cerrar la sesión en Ghost.
 
Resultados esperados: Tras la ejecución del procedimiento de creación, al revisar la sección Tags, se espera que no exista ningún elemento con el nombre y slug correspondiente al Tag que se acaba de intentar crear.

### 5. Modificar Post
