// Notas e medias.
var notas = [7.0,6.0,3.0];
var media = (notas[0] + notas[1] + notas[2]) / 3;

// Cálculos, da recuperação.
if (media > 4 && media < 7){
    console.log("Você está na recuperação.");
    let notaRec = 9;
    let mediaFinal = (notaRec + media) / 2;
    if (mediaFinal >= 5){
        console.log("Está aprovado.")
    } else{
        console.log("Foi reprovado.")
    }
} else if(media >= 7){
    console.log("Aprovado por média.")
    typeof media
}