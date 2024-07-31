let item1 = { width: 100 };
let w1 = item1.width || 0; // w1 = 100

let item2 = { width: null };
let w2 = item2.width || 0; // w2 = 0

let item3 = {};
let w3 = item3.width || 0; // w3 = 0
