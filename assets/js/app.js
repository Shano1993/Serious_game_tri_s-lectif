const arrayYellow = [
    "Bouteille en plastique",
    "Bouteille de lait",
    "Gel douche",
    "Produit nettoyant",
    "Emballage de yaourts",
    "Boîte de conserve en fer",
    "Cannettes",
    "Désodorisants",
    "Gel douche",
    "Barquette en aluminium",
];
let inputYellow = document.getElementById('inputYellow');
const arrayGreen = [
    "Bouteille de vin",
    "Pot de confiture",
    "Papier gras et souillé",
    "Bouteilles d'huile",
    "Bocaux",
    "Bouteille de ricard",
    "Bouteille de whisky",
    "Bouteille de coca (verre)",
    "Petit pot de bébé",
    "Bocal de soupe",
];
let inputGreen = document.getElementById('inputGreen');
const arrayBlue = [
    "Journal",
    "Magazines",
    "Feuille de papier",
    "Programme télé",
    "Prospectus",
];
let inputBlue = document.getElementById('inputBlue');
const arrayBrown = [
    "Pot de yaourt",
    "Reste de nourriture",
    "Couche-culottes",
    "Sachet de frites",
    "Os de poulet",
];
let inputBrown = document.getElementById('inputBrown');
let game = document.getElementById('game');

let array = [
    "Bouteille en plastique",
    "Bouteille de lait",
    "Gel douche",
    "Produit nettoyant",
    "Emballage de yaourts",
    "Boîte de conserve en fer",
    "Cannettes",
    "Désodorisants",
    "Gel douche",
    "Barquette en aluminium",
    "Bouteille de vin",
    "Pot de confiture",
    "Papier gras et souillé",
    "Bouteilles d'huile",
    "Bocaux",
    "Bouteille de ricard",
    "Bouteille de whisky",
    "Bouteille de coca (verre)",
    "Petit pot de bébé",
    "Bocal de soupe",
    "Journal",
    "Magazines",
    "Feuille de papier",
    "Programme télé",
    "Prospectus",
    "Pot de yaourt",
    "Reste de nourriture",
    "Couche-culottes",
    "Sachet de frites",
    "Os de poulet",
];
let score = 1;
let incorrect = 1;
let explication = document.getElementById('explication');

let wasteItem = document.getElementsByClassName('waste_item');

// choose a random word from the table
for (let i = 0; i < wasteItem.length; i++){
    wasteItem[i].innerHTML += array[Math.floor(Math.random() * array.length)];
}

// check if the word entered in the trash corresponds to the table
document.getElementById('button').addEventListener("click", function () {
    for (let i = 0; i < 1; i++) {
        if (arrayYellow.includes(inputYellow.value) || arrayGreen.includes(inputGreen.value)
            || arrayBlue.includes(inputBlue.value) || arrayBrown.includes(inputBrown.value)) {
            inputYellow.value = ""; // delete the content of the input
            inputGreen.value = ""; // delete the content of the input
            inputBlue.value = ""; // delete the content of the input
            inputBrown.value = ""; // delete the content of the input
            document.getElementById('score').innerHTML = " " + score++;

            // choose another random word from the table
            for (let i = 0; i < wasteItem.length; i++) {
                wasteItem[i].innerHTML = array[Math.floor(Math.random() * array.length)];
            }
            if (score === 11) {
                game.style.display = 'none';
                document.getElementById('again').style.display = "block";
                document.getElementById('won').style.display = "block";
                document.getElementById('won').innerHTML = "Tu es un vrai ECOLO !";
            }
        }
        else {
            incorrectYellow();
            incorrectGreen();
            incorrectBlue();
            incorrectBrown();
            inputYellow.value = ""; // delete the content of the input
            inputGreen.value = ""; // delete the content of the input
            inputBlue.value = ""; // delete the content of the input
            inputBrown.value = ""; // delete the content of the input
            document.getElementById('false').innerHTML = " " + incorrect++;

            for (let i = 0; i < wasteItem.length; i++) {
                wasteItem[i].innerHTML = array[Math.floor(Math.random() * array.length)];
            }
            if (incorrect === 11) {
                game.style.display = 'none';
                document.getElementById('again').style.display = "block";
                document.getElementById('won').style.display = "block";
                document.getElementById('won').innerHTML = "Tu ne sais pas trier tes déchets !";
            }
        }
    }
})

// button to start over
document.getElementById('again').addEventListener("click", function () {
    game.style.display = "flex";
    score = 1;
    incorrect = 1;
    document.getElementById('again').style.display = "none";
    document.getElementById('won').style.display = "none";
})


function incorrectYellow() {
    if (arrayGreen.includes(inputYellow.value)) {
        explication.innerHTML = "Faux," + " " + inputYellow.value + " " + "vas dans la poubelle verte !";
    }
    if (arrayBlue.includes(inputYellow.value)) {
        explication.innerHTML = "Faux," + " " + inputYellow.value + " " + "vas dans la poubelle bleue !";
    }
    if (arrayBrown.includes(inputYellow.value)) {
        explication.innerHTML = "Faux," + " " + inputYellow.value + " " + "vas dans la poubelle brune !";
    }
}

function incorrectGreen() {
    if (arrayYellow.includes(inputGreen.value)) {
        explication.innerHTML = "Faux," + " " + inputGreen.value + " " + "vas dans la poubelle jaune !";
    }
    if (arrayBlue.includes(inputGreen.value)) {
        explication.innerHTML = "Faux," + " " + inputGreen.value + " " + "vas dans la poubelle bleue !";
    }
    if (arrayBrown.includes(inputGreen.value)) {
        explication.innerHTML = "Faux," + " " + inputGreen.value + " " + "vas dans la poubelle brune !";
    }
}

function incorrectBlue() {
    if (arrayGreen.includes(inputBlue.value)) {
        explication.innerHTML = "Faux," + " " + inputBlue.value + " " + "vas dans la poubelle verte !";
    }
    if (arrayYellow.includes(inputBlue.value)) {
        explication.innerHTML = "Faux," + " " + inputBlue.value + " " + "vas dans la poubelle jaune !";
    }
    if (arrayBrown.includes(inputBlue.value)) {
        explication.innerHTML = "Faux," + " " + inputBlue.value + " " + "vas dans la poubelle brune !";
    }
}

function incorrectBrown() {
    if (arrayYellow.includes(inputBrown.value)) {
        explication.innerHTML = "Faux," + " " + inputBrown.value + " " + "vas dans la poubelle jaune !";
    }
    if (arrayBlue.includes(inputBrown.value)) {
        explication.innerHTML = "Faux," + " " + inputBrown.value + " " + "vas dans la poubelle bleue !";
    }
    if (arrayGreen.includes(inputBrown.value)) {
        explication.innerHTML = "Faux," + " " + inputBrown.value + " " + "vas dans la poubelle verte !";
    }
}







