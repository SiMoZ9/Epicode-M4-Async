//this ha il contesto globale = window

function foo() {
    console.log(this === window); //true -> lo scope è simile anche per le funzioni
}

const obj = {
    name: 'Mario',
    hello: n => console.log(n)
}

class Persona {

    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

const Simone = new Persona("Simone", "Panci")
obj.hello(Simone.name)

/////////////////////////////////////////////////////////////////////////////////

let showInfo = function () {
    return `${this.prod} ${this.modello} ${this.anno}`
}

const auto = {
    prod: 'Toyota',
    modello: 'Yaris',
    anno: 2018,
    getInfo: showInfo
}

const auto2 = {
    prod: 'Lamborghini',
    modello: 'Aventador',
    anno: 2020,
    getInfo: showInfo
}

const autoInfo = auto.getInfo()
console.log(autoInfo);

// le funzione di callback fanno riferimento al contesto globale
// le funzioni classiche si riferiscono all'oggetto stesso

/*  DESTRUCTurING */
// Operatore ES6


const userData = {
    nome: 'Peppe',
    eta: 35,
    citta: 'Roma'
}

/*
Creo una variabile con il nome uguale ad un attributo dell'oggetto userData e gli assegno il valore
*/

const { eta } = userData 
console.log('ETA: ', eta);

/*
Esempio con oggetti innestati
*/

const user = {
    nome: 'Cornelio',
    eta: 58,
    citta: 'Roma',
    address: {
        street: 'Via del Serafico 164',
        cap: '00030'
    }
}

const {nome, address: {cap}} = user;

console.log(`Il nome è ${nome}\nIl cap è ${cap}`);

/*
Con gli array le assegnazioni vanno fatte in base all'ordine
Esempio
*/

const fruits = ['Banana', 'Orange', 'Apple'];

const [banana] = fruits;

console.log(banana); //Stampa Banana

const [cotoletta] = fruits;

console.log(cotoletta); //Stampa sempre banana

const [,arancia,peppe] = fruits;

console.log(arancia + ' ' + peppe); //Stampa Orange e Apple

/*  SPREAD OPERATOR */
/* Operatore ES*/
/*
Combina gli array/oggetti senza avere più livelli
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const combArray = [...arr1,...arr2];

combArray.forEach(element => {console.log(element);})
console.log(typeof(arr1))

// Posso clonare

const clone = [...arr1];

clone.forEach(element => {console.log(element);})

// L'assegnazione di un array ad un altro non viene veramente clonato
/*
    Non assegno il vero array ma il puntatore all'inizio dell'array orginale
    Simila a:

    int *arr = [5,8,10];
    int *arr2 = arr; => arr2 punta all'inizio di arr2
*/

// Applicato su una stringa, questa viene splittata

/* Esempio oggetti */

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1,...obj2};
console.log(obj3);

/* Per oggetti innestati fa una copia per riferimento (punta all'inizio) */

/* FIND */

const numbers = [1, 2, 3, 4, 5, 6]
const primoPari = numbers.find( n => n%2 === 0)
const mag10 = numbers.find( n => n > 10 === 0)

console.log(primoPari + mag10);

/* FIND INDEX */
// Indice del primo elemento che soddisfa la condizione
const indexOfFirstNumber = n => n % 2 === 0
const indexFirst = numbers.findIndex( indexOfFirstNumber)

console.log(indexFirst);

/* INCLUDES */
// True o false in base a se trova o no un elemento
const trova3 = numbers.includes(3)
console.log(trova3);