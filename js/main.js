document.getElementById("mayusculas").addEventListener("click", function(event) {
    event.preventDefault();
    convertirMayusculas();
});

document.getElementById("minusculas").addEventListener("click", function(event) {
    event.preventDefault(); 
    convertirMinusculas();
});

document.getElementById("capitalizar").addEventListener("click", function(event) {
    event.preventDefault(); 
    capitalizarPrimerasLetras();
});

function convertirMayusculas() {
    var textoIngresado = document.getElementById("texto").value;
    var texto_transformado = textoIngresado.toUpperCase();
    var texto = document.getElementById("parrafo");
    texto.innerHTML = texto_transformado;
}

function convertirMinusculas() {
    var textoIngresado = document.getElementById("texto").value;
    var texto_transformado = textoIngresado.toLowerCase();
    var texto = document.getElementById("parrafo");
    texto.innerHTML = texto_transformado;
}

function capitalizarPrimerasLetras() {
    var textoIngresado = document.getElementById("texto").value;
    var texto_transformado = convertirPrimeraMayusculas(textoIngresado);
    var texto = document.getElementById("parrafo");
    texto.innerHTML = texto_transformado;
}

function convertirPrimeraMayusculas(texto) {
    var palabras = texto.split(" ");
    
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }
    
    var textoCapitalizado = palabras.join(" ");
    
    return textoCapitalizado;
}
