"use strict";

/*Le tueur en série
Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
Une équipe de choc est présente pour le neutraliser.
Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
caractéristique prise de celles disponibles (toujours aléatoire).
Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
Le tueur attaque un des survivants :
- soit le survivant meurt
- soit le survivant esquive et inflige 10 points de dégâts
- soit le survivant inflige 15 points de dégâts mais meurt
Les morts seront affichés à la fin
Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
Les survivants ont gagné mais RIP à X, X, X…)*/


// Définition d'un tableau de noms de survivants
const noms = ["Julien", "Eduard", "Mathis", "Lucie", "Clara"];

// Définition d'un tableau de caractéristiques de survivants avec leurs probabilités
const caracteristiques = [
    {
        name: "blonde",
        probaMourir: 0.5, 
        probaEsquive: 0.3
    },
    {
        name: "russe",
        probaMourir: 0.5,
        probaEsquive: 0.3
    },
    {
        name: "sportif",
        probaMourir: 0.3,
        probaEsquive: 0.5  
    },
    {
        name: "nerd",
        probaMourir: 0.5,
        probaEsquive: 0.3
    },
    {
        name: "courageux",
        probaMourir: 0.3,
        probaEsquive: 0.5
    }
];

// Création d'un tableau vide pour stocker les survivants
let survivants = [];

// Génération de 5 survivants avec des noms aléatoires et des caractéristiques aléatoires
for (let i = 0; i < 5; ++i) {
    const survivant = {
        name: noms[Math.floor(Math.random() * noms.length)],
        caractéristique: caracteristiques[Math.floor(Math.random() * caracteristiques.length)],
    };
     
    survivants.push(survivant);
}

// Création d'un tableau vide pour stocker les survivants morts
let morts = [];

// Points de vie de Jason initialisés à 100
let hpJason = 100;

// Boucle principale du jeu : tant que Jason est en vie et qu'il reste des survivants
while (hpJason > 0 && survivants.length > 0) {
    // Sélection aléatoire d'une cible parmi les survivants
    let cibleIndex = Math.floor(Math.random() * survivants.length);
    let cible = survivants[cibleIndex]; 

    // Génération d'un nombre aléatoire entre 0 et 1 pour déterminer l'issue de l'attaque
    let y = Math.random();

    if (y < cible.caractéristique.probaMourir) {
        // Si y est inférieur à la probabilité de mourir de la cible, la cible meurt
        morts.push(cible);
        // Suppression de la cible de la liste des survivants
        survivants.splice(cibleIndex, 1);
        console.log("Jason a tué " + cible.name); 
    }
    else if (y < cible.caractéristique.probaMourir + cible.caractéristique.probaEsquive) {
        // Si y est dans l'intervalle entre probaMourir et probaMourir + probaEsquive, la cible esquive et inflige 10 points de dégâts à Jason
        hpJason -= 10;
        console.log(cible.name + " a esquivé et a infligé 10pts de dégâts");
    }
    else {
        // Si y est supérieur à probaMourir + probaEsquive, la cible inflige 15 points de dégâts à Jason mais meurt
        hpJason -= 15;
        morts.push(cible);
        // Suppression de la cible de la liste des survivants
        survivants.splice(cibleIndex, 1);
        console.log("Jason a tué " + cible.name + " qui lui a infligé 15pts de dégâts");
    }
}

// Après la boucle, on vérifie si Jason est mort ou s'il a gagné
if (hpJason === 0 ) {
    console.log("Jason est mort");
    console.log("Les survivants ont gagné. Les morts sont: " + morts.map(m => m.name)); // ici "maps" permet d'extraire les noms des survivants morts du tableau morts et les stocke dans un nouveau tableau. (j'ai dû m'aider de chatGPT ici mais j'ai appris l'utilisation de "maps")
}
else {
    console.log("Les survivants ont perdu et les morts sont " + morts.map(m => m.name));
};


/*J'ai plusieurs porblèemes dans mon jeu du tueur notamment le fait que Jason est capable de tuer plusieurs fois la même personne ou encore que certaines personnes mortes rejouent 
alors que j'ai essayé de faire en sorte que ça n'arrive pas. 
l'idée étant de faire ça :

const survivant = {
    name: noms[Math.floor(Math.random() * noms.length)],
    caractéristique: caracteristiques[Math.floor(Math.random() * caracteristiques.length)],
    aEteAttaque: false  ---> j'ai rajouté ça
};

let cibleIndex;
let cible;

do {
    cibleIndex = Math.floor(Math.random() * survivants.length);
    cible = survivants[cibleIndex];
} while (cible.aEteAttaque); 
// Marquez ce survivant comme ayant été attaqué
cible.aEteAttaque = true;

mais ça me crée des boucles infinies et je n'arrive plus à m'en sortir. 

Si je devrais laissé un commentaire tout de même ce jeu est très dur à réaliser même pour moi qui a un peu de base en coding ça m'a prit pas mal de temps de juste arriver à ce résultat.
*/