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
