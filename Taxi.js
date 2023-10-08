"use strict";

/*Exo 1 : Le taxi
John essaie de rentrer chez lui en taxi.
Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
rouges de chez lui.
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
qu’il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d’une liste de 5 musiques dont Anissa - Wejdene
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements*/

let santeMentale = 10 
let nbEssais = 0
let musique = ["Anissa - Wejdene","Bella - Gims", "Zombie - Gims", "Life - Hamza", "Demain - PLK"] //création d'un tableau avec les musiques


function radio() { //création de la fonction qui gère la radio
    nbEssais++;
    
    const musiqueAleatoire = musique[Math.floor(Math.random() * musique.length)]; //mise en place du tirage au sort de la musqiue dans le tableau "musique" crée auparavant

if (musiqueAleatoire === "Anissa - Wejdene"){ //mise en place des conditions et des différents effets en fonction de la musique tirée au sort 
    santeMentale -= 1
} else if( musiqueAleatoire === "Bella - Gims"){
    santeMentale += 1
} else if(musiqueAleatoire === "Zombie - Gims"){
    santeMentale -= 1
} else if(musiqueAleatoire === "Life - Hamza"){
    santeMentale += 1
} else if(musiqueAleatoire === "Demain - PLK"){
    santeMentale -= 1
} 
return musiqueAleatoire;
 } // j'ai essayé d'utilisé un switch au début mais j'ai pas réussi donc je me suis rabattu sur un else if, mais je pense que ça doit être plus opti avec un switch.


while (santeMentale > 0 && nbEssais < 30) {
  const musiqueJouee = radio();
  console.log(`John est tombé sur la musique : ${musiqueJouee}. Santé mentale actuelle : ${santeMentale}`);
}; // affichage de l'avancée de la partie

if (santeMentale <= 0) {
        console.log("Explosion");
 } else {
        console.log("John est rentré chez lui avec une santé mentale finale de : " + santeMentale);
      };// condition de victoire et de défaite