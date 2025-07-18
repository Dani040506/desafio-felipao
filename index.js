//Projeto Classificador de Nível de Herói

let nome = "Dani"
let xpnumerica = 0
let nivelHeroi = ""
if(xp <= 1000){
    xp = "Ferro"
}else if(xpnumerica >= 1001 && xp <= 2000){
    nivelHeroi = "Bronze"
}else if(xpnumerica >= 2001 && xp <= 5000){
    nivelHeroi = "Prata"
}else if(xpnumerica >= 5001 && xp <= 7000){
    nivelHeroi = "Ouro"
}else if(xpnumerica >= 7001 && xp <= 8000){
    nivelHeroi = "Platina"
}else if(xpnumerica >= 8001 && xp <= 9000){
    nivelHeroi = "Ascendente"
}else if(xpnumerica >= 9001 && xp <= 10000){
    nivelHeroi = "Imortal"
}else if(xpnumerica >= 10001){
    nivelHeroi = "Radiante"
}


console.log("O herói de nome" + nome + "está no nível de " + nivelHeroi)