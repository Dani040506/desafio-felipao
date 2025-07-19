//Projeto Classificador de Nível de Herói

let nome = "Dani"
let xpnumerica = 0
let nivelHeroi = ""
if(xpnumerica <= 1000){
    nivelHeroi = "Ferro"
}else if(xpnumerica >= 1001 && xpnumerica <= 2000){
    nivelHeroi = "Bronze"
}else if(xpnumerica >= 2001 && xpnumerica <= 5000){
    nivelHeroi = "Prata"
}else if(xpnumerica >= 5001 && xpnumerica <= 7000){
    nivelHeroi = "Ouro"
}else if(xpnumerica >= 7001 && xpnumerica <= 8000){
    nivelHeroi = "Platina"
}else if(xpnumerica >= 8001 && xpnumerica <= 9000){
    nivelHeroi = "Ascendente"
}else if(xpnumerica >= 9001 && xpnumerica <= 10000){
    nivelHeroi = "Imortal"
}else if(xpnumerica >= 10001){
    nivelHeroi = "Radiante"
}


console.log("O herói de nome " + nome + " está no nível de " + nivelHeroi)