//Events: Event driven programming
//      : used heavily in node.js
const EventEmiiter = require("events"); //EventEmitter is a class from events module
const customEmitter = new EventEmiiter();
customEmitter.on(`response`, (name, id) => {
  console.log(`data recieved name:${name} with id:${id}`);
});
customEmitter.on(`response`, () => {
  console.log(`data 2 recieved `);
});
console.log("start");
customEmitter.emit(`response`, "john", 34);
