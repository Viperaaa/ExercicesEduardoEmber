"use strict";


//ici il manque une virgule apres l index 0 et une guillemet; ensuite apres le prenom michel il faut egalement une virgule et non un point virgule
let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(user => {
    //ligne 13 il manque la majuscule pour le kamelCase et le parametre n etais pas appeler 
    if (countCharacter(user) < 5) {
        //ligne 14 probleme de guillemet
        console.log("c'est un prénom long de plus de 5 lettres.")
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
});





