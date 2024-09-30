
        let identificador, etiqueta, clase, nombre;

        // getElementByID
        identificador = document.getElementById("titulo");
        console.log(identificador.innerText);

        // getElementByTagName
        seccion = document.getElementsByTagName("section");
        console.log(seccion[0].innerText);

        etiqueta = document.getElementsByTagName("p");
        console.log(etiqueta[0].innerText);

        // getElementByClassName
        clase = document.getElementsByClassName("parrafo");
        console.log(clase[1].innerText);

        // getElementByName
        nombre = document.getElementsByName("subtitulo");
        console.log(nombre[1].textContent);

        // Reemplazar un nodo
        let elemento = document.createElement("p");
        let contenido = document.createTextNode("Reemplazo");
        elemento.setAttribute("class", "parrafo2");
        elemento.appendChild(contenido);
        seccion[1].replaceChild(elemento, clase[0]);

        // Eliminar nodo
        seccion[0].removeChild(nombre[0]);

        // Crear nodo dentro de otro nodo
        elemento = document.createElement("article");
        contenido = document.createTextNode("Articulo de sección");
        elemento.appendChild(contenido);
        document.getElementById("nodo").appendChild(elemento);

        // Insertar contenido en el nodo
        document.getElementById("contenido").innerHTML = 'HOLA, :) <br> <p class="nuevo"> otro párrafo en el nodo </p>';
        document.getElementById("enlace").innerHTML = "Google";

        // Cambiar atributos del nodo
        etiqueta[0].setAttribute("class", "parrafo nuevo");
        seccion[2].setAttribute("class", "contenido");

        // Estilos
        document.getElementById("titulo").style.background = '#f00';
        document.getElementById("contenido").style.marginTop = '10px';
        document.getElementById("contenido").style.lineHeight = '50px';


      // Crear y agregar la primera nueva sección
let nuevaSeccion = document.createElement("section");

// Crear h1 con el texto "Conóceme"
let nuevoTitulo = document.createElement("h1");
let textoTitulo = document.createTextNode("Conóceme");
nuevoTitulo.appendChild(textoTitulo);

// Crear primer artículo con texto "Mi foto"
let primerArticulo = document.createElement("article");
let textoArticulo1 = document.createTextNode("Mi foto");
primerArticulo.appendChild(textoArticulo1);

// Crear segundo artículo con una imagen
let segundoArticulo = document.createElement("article");
let imagen = document.createElement("img");
imagen.setAttribute("src", "./img/m.png"); 
imagen.setAttribute("alt", "Imagen de perfil");
segundoArticulo.appendChild(imagen);

// Agregar h1 y los dos artículos a la nueva sección
nuevaSeccion.appendChild(nuevoTitulo);
nuevaSeccion.appendChild(primerArticulo);
nuevaSeccion.appendChild(segundoArticulo);


// Crear y agregar la segunda nueva sección
let nuevaSeccion2 = document.createElement("section");

// Crear h1 con el texto "Conóceme 2"
let nuevoTitulo2 = document.createElement("h1");
let textoTitulo2 = document.createTextNode("Conóceme 2");
nuevoTitulo2.appendChild(textoTitulo2);

// Crear primer artículo con texto "Mi foto 2"
let primerArticulo2 = document.createElement("article");
let textoArticulo2 = document.createTextNode("Mi foto 2");
primerArticulo2.appendChild(textoArticulo2);

// Crear segundo artículo con una imagen
let segundoArticulo2 = document.createElement("article");
let imagen2 = document.createElement("img");
imagen2.setAttribute("src", "./img/m.png"); 
imagen2.setAttribute("alt", "Imagen de perfil");
segundoArticulo2.appendChild(imagen2);

// Agregar h1 y los dos artículos a la nueva sección
nuevaSeccion2.appendChild(nuevoTitulo2);
nuevaSeccion2.appendChild(primerArticulo2);
nuevaSeccion2.appendChild(segundoArticulo2);

// Estilos adicionales para ambas secciones y artículos
primerArticulo.style.background = '#f0a500';
segundoArticulo.style.background = '#e6e6e6';
primerArticulo.style.alignContent = 'center';
primerArticulo.style.textAlign = 'center';
primerArticulo.style.fontSize = '30px';


primerArticulo2.style.background = '#f0a500';
segundoArticulo2.style.background = '#e6e6e6';
primerArticulo2.style.alignContent = 'center';
primerArticulo2.style.textAlign = 'center';
primerArticulo2.style.fontSize = '30px';

// Insertar las secciones al body, una debajo de la otra
document.body.appendChild(nuevaSeccion);   // Primera sección
document.body.appendChild(nuevaSeccion2);  // Segunda sección