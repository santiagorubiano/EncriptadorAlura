const inputText = document.querySelector(".input-text")
const mensaje = document.querySelector(".mensaje")
// "e" se convierte "enter"
// "i" se convierte "imnes"
// "a" se convierte "ai"
// "o" se convierte "ober"
// "u" se convierte "ufat"
function btnEncriptar(){
    const textoEncriptado = encriptar(inputText.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none"
    inputText.value = ""
}
function btndesencriptar(){
    const textoDesencreptado = desencriptar(inputText.value)
    mensaje.value = textoDesencreptado;
    mensaje.style.backgroundImage="none"
    inputText.value = ""
    
}



function encriptar(stringEncriptar){
    let matrizCodigo =[["e","enter"],["i", "imees"],["a","ai"],["o","ober"],["u","ufat"] ]
    stringEncriptar = stringEncriptar.toLowerCase();


    for (let i = 0;i < matrizCodigo.length;i++){
        if (stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }   
    }
    return stringEncriptar
}
function desencriptar(stringDesencriptar){
    let matrizCodigo =[["enter","e"],["imees", "i"],["ai","a"],["ober","o"],["ufat","u"] ]
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0;i < matrizCodigo.length;i++){
        if (stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }   
    }
    return stringDesencriptar
}
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
}