# TrackingZero

Este es un sistema basado en nodejs utilizado para el seguimiento en estación terrena del CatSat Zero en tiempo real por medio de GPS y comunicación LoRa.

## Instalacion normal (MacOS y Linux)

- Instalar Node.js 8.12.0
- Clonar `https://github.com/ElectronicCats/TrackingZero` a TrackingZero folder 
- ir a TrackingZero, abrir terminal y ejecutar

`npm install`

## Instalaciones especiales Windows

- Instalar Node.js 8.12.0
- Clonar`https://github.com/ElectronicCats/TrackingZero` 
- Abrir terminal de Windows e ir a la carpeta TrackingZero 
- Ejecutar los siguientes comandos

`npm install --global --production windows-build-tools`

`npm install --msvs_version=2015`

## Ejecutar programa

- Editar el archivo app.js con el puerto serial correspondiente a donde esta conectada la estacion terrena

En la linea 34 [https://github.com/ElectronicCats/TrackingZero/blob/Version_1/app.js#L34](https://github.com/ElectronicCats/TrackingZero/blob/Version_1/app.js#L34)

Guardar el archivo y ejecutar desde terminal

`node app.js `

- Abrir tu navegador favorito e ir a:

`localhost:3000`

## Tecnologias del proyecto.

- Node.js
- Socket.io
- Lora 915Mhz
- Stylus
- Jade
- CatSat
- Open Street Map

Electronic Cats invests time and resources providing this open source design, please support Electronic Cats and open-source hardware by purchasing products from Electronic Cats!

Released under an MIT license. See the LICENSE file for more information.
