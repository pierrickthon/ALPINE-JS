import Alpine from "./node_modules/alpinejs/dist/module.esm.js";
import FormatValidatorService from "./services/format-validator/FormatValidator.service.js";
import NotificationService from "./services/notification/Notification.service.js";

let numbers = [1, 2, 3, 4, 5];
const PI = 3.14;

const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);

const allPositive = (arr) => arr.every((val) => val > 0);

const doubleElements = (arr) => arr.map((val) => val * 2);

const displayElements = (arr) => arr.forEach((val) => console.log(val));


const checkNumber = (num) => {
    switch (true) {
        case num > 0:
            console.log(`${num} est positif.`);
            break;
        case num < 0:
            console.log(`${num} est négatif.`);
            break;
        default:
            console.log(`${num} est zéro.`);
    }
};

const person = {
    name:'Yann',
    age:19,
    greet: function(){
        console.log(`Salut, je suis ${this.name} et j'ai ${this.age}`);
    }
};


const primitiveExample = 42;
const compositeExample = { name:'Alice', age: 25};


const divide = (a, b) => {
    if ( b === 0 ) {
        throw new Error ('Si b = 0 alors la division est impossible.');
    }
    return a / b;
};

// Reprise du code de facon clean 

const main = () => {
    try {
        // Utilisation des fonctions et des tableaux
        console.log('Sum of numbers:', sum(numbers));
        console.log('All numbers are positive:', allPositive(numbers));
        console.log('Doubled numbers:', doubleElements(numbers));
        displayElements(numbers);

        // Utilisation de structures de contrôle
        checkNumber(10);
        checkNumber(-5);
        checkNumber(0);

        // Utilisation de this
        person.greet();

        // Utilisation de types primitifs et composites
        console.log('Primitive example:', primitiveExample);
        console.log('Composite example:', compositeExample);

        // Gestion des erreurs
        console.log('Division result:', divide(10, 2));
        console.log('Division result:', divide(10, 0)); // Cela lancera une erreur
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};


script.start();