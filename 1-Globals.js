const ammount = 100000;
if (ammount < 10000) {
  console.log("poor");
} else {
  console.log("Rich");
}
console.log("This is my first Node App");
// GLOBALS - NO WINDOW!!!!

// __dirname  - path to current directory
// __filename - file name
// require   - function to use modules(CommonJS)
// module    - info about current module (file)
// process   - info about env where the program is being executed
console.log(__dirname);
