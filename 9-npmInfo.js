// npm -- global command , comes with node
// npm --version

// local Dependency - use it only in this particular project
// npm i <packagename>

// global Dependency - use it in any project
// npm install -g <packagename>

// package.json - manifest file (stores important info about project/package)
//Three ways to create package.json
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y ( everything default)

const _ = require(`lodash`);
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// npm install <packagename> -D
// npm i <packagename> --save-dev
//eg npm i nodemon -D  -nodemon package automatically runs node applications when changes are made/

//uninstall node modules/package
//npm uninstall <packagename>
