// Arrays typescript

const array: number[] = [1, 2, 3];

const numeros: Array<number> = [10, 20, 30];

//Any typescript

const arr1: any[] = [1, 2, 3, "", true, { nome: "felipe" }];

// Funções - tipo

const novaFuncao = (nome: string, idade: number) => {
    console.log("Nome: " + nome);

    const idadeProximoAno: number = 1 + idade;
    console.log(idadeProximoAno);

    // resto da função...
};

// Retorno de função

const greeting = (name: string): string => {
    return `Ola, ${name}!`;
};

//tipo de objeto

function passCoordinates(coord: { x: number; y: number }) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const pessoaObj: { nome: string; surname: string } = { nome: "Matheus", surname: "Duarte" };

// Propriedades opcionais

function showNumbers(a: number, b?: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}

// Validação de opcionais

function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }

    return `Olá, ${firstName}, tudo bem?`;
}

// Union types

function showBalance(balance: string | number) {
    console.log(`Saldo da conta é: ${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "teste", true];

// union types ++

const showUserRole = (role: boolean | string) => {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }

    return `A função do usuário é ${role}`;
};

// type alias
type ID = string | number;

const showID = (id: ID) => {
    console.log(`O ID é ${id}`);
};

// Interfaces

interface Point {
    x: number;
    y: number;
    z: number;
}

const showCoords = (obj: Point) => {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
};

const coordsObj = {
    x: 10,
    y: 15,
    z: 20,
};

showCoords(coordsObj);

// type alias x inteface

interface Person {
    name: string;
}

interface Person {
    age: number;
}

// literal types

let test: "testando";

test = "testando";

console.log(test);

const showDirection = (direction: "left" | "right" | "center") => {
    console.log(`A direção é: ${direction}`);
};

showDirection("center");

// Non null assertion operator !

const p = document.getElementById("some-p");

console.log(p!.innerText);

// big int

let n: bigint;

n = 1000n;

//symbol

let symbolA: symbol = Symbol("a");
let symbolB: symbol = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
