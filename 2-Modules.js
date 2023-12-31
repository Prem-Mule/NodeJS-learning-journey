// CommonJS - each file is modules (by default)
// Modules  - encapsulated code(only shared minimum)
const sayHi = require("./4-ModulesFunction");
const names = require("./3-ModuleNames");
const { andrew, ronaldo, aryan } = require("./3-ModuleNames");
console.log(names);
sayHi("Prem");
sayHi(names.andrew);
sayHi(names.ronaldo);
sayHi(names.aryan);
console.log(andrew);
console.log(ronaldo);
console.log(aryan);
const data = require("./5-alternativeSyntax");
console.log(data);
require("./6-ModulesAddition");
