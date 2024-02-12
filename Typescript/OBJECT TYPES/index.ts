// tipo de objeto para função com interface

interface Product {
    name: string;
    price: number;
    isAvailable: true;
}

const showProductDetail = (product: Product) => {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
};

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};

showProductDetail(shirt);

// propriedades opcionais em interfaces

interface User {
    email: string;
    role?: string;
}

const showUserDetails = (user: User) => {
    console.log(`O ususario tem o email: ${user.email}`);

    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
};

const u1: User = {
    email: "breno@gmail.com",
    role: "Admin",
};

const u2: User = {
    email: "gabriel2gmail.com",
};

showUserDetails(u1);
showUserDetails(u2);

// propriedades readonly

interface Car {
    brand: string;
    readonly wheels: number;
}

const fusca: Car = {
    brand: "VW",
    wheels: 4,
};

console.log(fusca);

// index signature

interface CoordObject {
    [index: string]: number;
}

let coords: CoordObject = {
    x: 10,
};

// extending types

interface Human {
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superpowers: string[];
}

const matheus: Human = {
    name: "Matheus",
    age: 22,
};

const goku: SuperHuman = {
    name: "Goku",
    age: 200,
    superpowers: ["Kamehameha", "Genkidama"],
};

// intersection types

interface Character {
    name: string;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};

// readonly array

let myArray: ReadonlyArray<string> = ["maçã", "laranja", "banana"];

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item);
});

myArray.map((item) => {
    return `Fruta: ${item}`;
});

console.log(myArray);

// tuplas

type FiveNumbers = [number, number, number, number, number];

const myNumverArray: FiveNumbers = [1, 2, 3, 4, 5];

// tuplas com readonly

const showNumbers = (numbers: [number, number]) => {
    console.log(numbers[0]);
    console.log(numbers[1]);
};

showNumbers([1, 2]);
