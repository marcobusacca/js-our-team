"use strict";


// DICHIARAZIONE ARRAY "TEAM_ARRAY"
let teamArray = [

    // OGGETTO 1
    {

        'name' : 'Wayne Barnett',

        'role' : 'Founder & CEO',

        'image' : 'wayne-barnett-founder-ceo.jpg'
    },

    // OGGETTO 2
    {

        'name' : 'Angela Caroll',

        'role' : 'Chief Editor',

        'image' : 'angela-caroll-chief-editor.jpg'
    },

    // OGGETTO 3
    {

        'name' : 'Walter Gordon',

        'role' : 'Office Manager',

        'image' : 'walter-gordon-office-manager.jpg'
    },

    // OGGETTO 4
    {

        'name' : 'Angela Lopez',

        'role' : 'Social Media Manager',

        'image' : 'angela-lopez-social-media-manager.jpg'
    },

    // OGGETTO 5
    {

        'name' : 'Scott Estrada',

        'role' : 'Developer',

        'image' : 'scott-estrada-developer.jpg'
    },

    // OGGETTO 6
    {

        'name' : 'Barbara Ramos',

        'role' : 'Graphic Designer',

        'image' : 'barbara-ramos-graphic-designer.jpg'
    }
];


// CICLO FOR CHE SCORRE TUTTI GLI ELEMENTI DEL TEAM_ARRAY
for (let i = 0; i < teamArray.length; i++){
    
    // INSERIMENTO DENTRO UNA VARIABILE OGNI ELEMENTO DELLA SEGUENTE ITERAZIONE
    let teamObject = teamArray[i];

    // STAMPO IN CONSOLE UN INDICATORE DI OGNI OGGETTO
    console.log(`
    Oggetto ${i+1}
    `);

    // CICLO FOR IN CHE STAMPA IN CONSOLE LE CHIAVI E I VALORI DI OGNI OGGETTO
    for (let key in teamObject){

        // STAMPO IN CONSOLE OGNI CHIAVE DELL'OGGETTO
        console.log(`
        Chiave: ${key}
        `);

        // STAMPO IN CONSOLE OGNI VALORE DELL'OGGETTO
        console.log(`
        Valore: ${teamObject[key]}
        `);
    }
}


// RECUPERO LA GRIGLIA HTML DOVE INSERIRE LE INFORMAZIONI
const grid = document.getElementById('grid');

// CICLO FOR CHE SCORRE TUTTI GLI ELEMENTI DEL TEAM_ARRAY
for (let i = 0; i < teamArray.length; i++){
    
    // INSERIMENTO DENTRO UNA VARIABILE OGNI ELEMENTO DELLA SEGUENTE ITERAZIONE
    let teamObject = teamArray[i];

    // VARIABILE CONTENTE GLI ELEMENTI DA INSERIRE NEL DOM
    let domContent = `
    <!-- Object ${i+1} Col Card -->
    <div class="col-12 col-md-4 d-flex justify-content-center my-3">
        <div class="card" style="width: 18rem;">
            <!-- Object ${i+1} Info Image -->
            <img src="./img/${teamObject.image}" class="card-img-top" alt="image-${i+1}">
            <!-- Object ${i+1} Card Body -->
            <div class="card-body text-center">
                <!-- Object ${i+1} Info Name -->
                <h5 class="card-title">${teamObject.name}</h5>
                <!-- Object ${i+1} Info Role -->
                <p class="card-text">${teamObject.role}</p>
            </div>
        </div>
    </div>
    `

    // INSERIMENTO INFORMAZIONI DENTRO LA GRIGLIA HTML
    grid.innerHTML += (domContent);
}