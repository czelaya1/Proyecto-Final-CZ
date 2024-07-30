# IntroAngular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

# Instrucciones de Inicio

ejecutar npm install para instalar todas las dependencias del proyecto.

# Estructura del Proyecto

Pages: Index, Cafta, Quienes Somos y Contacto

Componentes:article: En este apartado se agregaron todas las imagenes e hipervinculos de nuestra pagina de inicio o index, asimismo los siguientes elementos

            sidebar: En este apartado podemos visualizar los botones de denuncias y Sihcal y asi mismo todo el menu desplegable.
            
            header: aqui se agregaron todo el menu principal en el html haciendo referencia a los hipervinculos del routeo en app.routing.module.ts y en el ts se agrego una funcion para poder navegar entre menus.
            
            footer: Pie de Página, también se definió en el app component
            
            contact-form: En este componente se creo un formulario y se agregaron las validaciones y tambien un mapa de geolocalizacion con la libreria de leaflet

            instalar los paquetes de leaflet:
            npm install leaflet
            npm install @types/leaflet
            hacer el import en el componente de la libreria
            crear la funcion para que inicializemos el mapa
            llamamos la funcion creada en el ngOnInit
            lo agregamos en el html de este mismo componente
            
            cafta-form: en el componente en el html se fueron agregando un listado de los hipervinculos y se añadio estilo en el scss.
            
            quienes-somos-form: se agregaron la mision y la vision de la secretaria de trabajo en el html y algunos estilos

# Instrucciones de uso

El sitio consta de 4 páginas: Inicio, Quienes somos, CAFTA y Contacto, se puede navegar entre ellas utilizando el menú definido en el header 

Inicio: Me muestra las noticias de SETRASS y tiene su barra lateral para navegar a otros sitios.

Quienes Somos: Refleja la mision institucional que contiene mision, vision, valores y politica de calidad

CAFTA: En esta se publica documentación e información relevante.

Contacto: Se muestra el formulario de contacto y el mapa de geolocalizacion donde esta situado la secretaria de trabajo en tegucigalpa.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Enlace del video de presentacion:

https://drive.google.com/file/d/1jrOQQjQdKhdIOy_Y2wnV2GYsQLMU6GMn/view?usp=sharing