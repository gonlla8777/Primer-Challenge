//////////
//BOTON DE DESENCRIPTAR
//////////
var boton2 = document.querySelector ("#btn-desencriptar");

boton2.addEventListener ("click", function(event){

    event.preventDefault()
    var copia2 = box.texto.value;
    copia2 = copia2.toLowerCase();
    

    while(copia2.search("enter") != -1){
        copia2 = copia2.replace("enter", "e")
    }
    
    while(copia2.search("imes") != -1){
        copia2 = copia2.replace("imes", "i")
    }
    
    while(copia2.search("ai") != -1){
        copia2 = copia2.replace("ai", "a")
    }

    while(copia2.search("ober") != -1){
        copia2 = copia2.replace("ober", "o")
    }

    while(copia2.search("ufat") != -1){
        copia2 = copia2.replace("ufat", "u")
    }
    
    var segundoTexto = document.querySelector(".segundoBox")
    segundoTexto.texto1.value = copia2
    box.texto.value = "";

})
//////////
// BOTON DE ENCRIPTAR
//////////
var boton = document.querySelector ("#btn-encriptar");
boton.addEventListener ("click", function(event){
    event.preventDefault()
    var copia = box.texto.value;
    
    copia = copia.toLowerCase();
    
    function cambiar(str,re, rere){
        if (str.search(re) != -1) {
            copia = copia.replaceAll(re, rere)
          }
    }

        cambiar(copia,"e","enter")
        cambiar(copia,"i","imes")
        cambiar(copia,"a","ai")
        cambiar(copia,"o","ober")
        cambiar(copia,"u","ufat")


   var segundoTexto = document.querySelector(".segundoBox")
   segundoTexto.texto1.value = copia
   box.texto.value = "";

})

//////////
//BOTON DE COPIAR
//////////

function copyToClipBoard() {

    var content = document.getElementById('texto1');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
}


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/