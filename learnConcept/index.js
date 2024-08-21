// const addFn = require('./add.js');

// console.log("Hello from index.js");

// const sum = addFn(1,2);
// console.log(sum);

// const sum1 = addFn(2,3);
// console.log(sum1);

// require('./batman');
// require('./superman');


// const superHero =require('./super-hero');

// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName());

// const math = require("./math");

// const {add, subtract} = math;

// console.log(add(2, 3));
// console.log(subtract(2, 3));

// const data = require('./data.json');

// console.log(data.name);

const path = require("node:path") ;
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.format(path.parse(__filename)));
// console.log(path.isAbsolute("./data.json"));

console.log(path.join("folder1", "folder2", "index.html"));
