// Void

function withoutReturn(): void {
    console.log("Esta função não tem retorno!");
}

const withoutReturn2 = (): void => {
    console.log("Esta função não tem retorno!");
};

// Calback como argumento

const greeting = (name: string) => {
    return `Olá ${name}`;
};

const preGreeting = (f: (name: string) => string, userName: string) => {
    console.log("Preparando a função!");

    const greet = f(userName);

    console.log(greet);
};

// Generic functions

const firstElement = <T>(arr: T[]): T => {
    return arr[0];
};

const mergeObjects = <U, T>(obj1: U, obj2: T) => {
    return {
        ...obj1,
        ...obj2,
    };
};

// constraints

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;

    if (+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }
    return biggest;
}

// especificar tipo de argumento

const mergeArrays = <T>(arr1: T[], arr2: T[]): T[] => {
    return arr1.concat(arr2);
};

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));

// parametros opicionais

const moderGreeting = (name: string, greet?: string) => {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    } else {
        return `Olá ${name}, tudo bem?`;
    }
};

console.log(moderGreeting("Matheus"));
console.log(moderGreeting("Pedro", "Dr."));

// parametro default

const somaDefault = (n: number, m = 10) => {
    return n + m;
};

// unknown

const doSomething = (x: unknown) => {
    if (Array.isArray(x)) {
        console.log(x);
    } else if (typeof x === "number") {
        console.log("X é um numero  ");
    }
};

doSomething("1");

// never type

const showErrorMessage = (msg: string): never => {
    throw new Error(msg);
};

showErrorMessage("Algum Erro");

// rest operator

const sumAll = (...n: number[]) => {
    return n.reduce((number, sum) => sum + number);
};

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 345, 293847));

// destructuring

const showProductDetails = ({ name, price }: { name: string; price: number }): string => {
    return `O nome do produto é ${name} e ele custa ${price}`;
};

const shirt = { name: "Camisa", price: 49.99 };

showProductDetails(shirt);
