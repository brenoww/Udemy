// Arrays typescript
var array = [1, 2, 3];
var numeros = [10, 20, 30];
//Any typescript
var arr1 = [1, 2, 3, "", true, { nome: "felipe" }];
// Funções - tipo
var novaFuncao = function (nome, idade) {
    console.log("Nome: " + nome);
    var idadeProximoAno = 1 + idade;
    console.log(idadeProximoAno);
    // resto da função...
};
// Retorno de função
var greeting = function (name) {
    return "Ola, ".concat(name, "!");
};
//tipo de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
var pessoaObj = { nome: "Matheus", surname: "Duarte" };
// Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}
// Validação de opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
// Union types
function showBalance(balance) {
    console.log("Saldo da conta \u00E9: ".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
// union types ++
var showUserRole = function (role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
};
var showID = function (id) {
    console.log("O ID \u00E9 ".concat(id));
};
var showCoords = function (obj) {
    console.log("x: ".concat(obj.x, ", y: ").concat(obj.y, ", z: ").concat(obj.z));
};
var coordsObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordsObj);
// literal types
var test;
test = "testando";
console.log(test);
var showDirection = function (direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
};
showDirection("center");
// Non null assertion operator !
var p = document.getElementById("some-p");
console.log(p.innerText);
// big int
var n;
n = 1000n;
//symbol
