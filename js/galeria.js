function cambiarImagen(numero, src) {
    console.log(numero);
    console.log(src);
    console.log('galeria_'+numero);
    document.getElementById('galeria_'+numero).src = src;
} 