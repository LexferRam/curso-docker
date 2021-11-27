## INSTALACION DE DOCKER

1. linux y Mac
   * Ir a ==> docker.com
   * seleccionar "get started"
   * En "docker Desktop" seleccionar descargar en el sistema operativo(linux/mac)
   * paso a paso instalacion de ubuntu en ubuntu 20.04:
     * <https://docs.docker.com/engine/install/ubuntu/>
     * <https://docs.docker.com/engine/install/linux-postinstall/>
  
## COMANDOS DOCKER

* docker build -t express-app .  **(Permite generar un imagen y con el flag -t se le asigna un nombre a la imagen)**
* docker build -t express-app:v2 .  **(Permite generar un imagen y con el flag -t se le asigna un nombre a la imagen y version usando :v2 despues del nombre)**
* docker images **(Lista las imagenes activas)**
* docker image rm express-app:v2 **(Permite eliminar una imagen indicando la version con el tag)**
* docker run [nombre-image] **(ejecuta una imagen y crea un contenedor)**
* docker run -d --name [nombre-contenedor] [nombre-image] **(ejecuta una imagen en 2do plano usanod el flag -d(detach))**
* docker ps **(permite verificar los contenedores que estan corriendo)**
* docker ps -a **(permite verificar los contenedores que estan activos e inactivos)**
* docker rm [CONTAINER ID]/[IMAGE NAME] **(eliminar un contenedor)**
* docker stop/kill [CONTAINER ID]/[IMAGE NAME] **(detener un contenedor)**
* docker start [CONTAINER ID]/[IMAGE NAME] **(ejecutar un contenedor)**
* docker run -d/-it(solo para react) --name [name container] -p 3333:3333 [image name] **(el flag -p permite mapear los puertos, que es el proceso de redireccionar el puerto 3333 del pc al puerto 3333 del contenedor, de esta forma cada vez que se llame al puerto 3333 del pc se estara llamando al 3333 del contenedor)**

---

## WORKING WITH VOLUMENS

Si generamos una imagen de una app y luego realizamos un cambio a dicha app no lo vamos a ver reflejado en el contenedor que se esta ejecutando con la imagen generada, para ver los ultimos cambios debemos generar una nueva imagen.
Para solventar este problema debemos mapear el working directory de nuestra app local al working directory del contenedor, de esta manera si hacemos un cambio en el proyecto local veremos los cambios reflejados en la app del contenedor **(esto se logra mediante los volumes con el flag -v)**

> **-v [absolutePathProject]:[workingDirectoryContainer]**

#### En Mac o linux: 

**-v $(pwd):[workingDirectoryContainer]** (pwd permite obtener la rute absoluta del directorio actual)

 **-v /usr/app/node_modules** (Permite que no se borre las dependencias de node_modules)

 ##### EJEMPLO EJECUTANDO CON VOLUMES

 * docker run -v $(pwd):/app -d --name [name container] -p 3333:3333 [image name]
 * docker run -v $(pwd):/app -v /app/node_modules -d --name react-app -p 3000:3000 react-app
