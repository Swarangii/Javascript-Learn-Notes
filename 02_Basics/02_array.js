// Array Part 2

const marvel_heros = ["thor", "ironman", "spiderman"];

const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);

console.log(marvel_heros);

const allhero = marvel_heros.concat(dc_heros);
console.log(allhero);

// spread

const all_new_hero = [...marvel_heros, ...dc_heros];

console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5], 5, 6, [7, 8, [9, 0]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Swarangi"));

console.log(Array.from("Swarangi"));

console.log(Array.from({ name: "Swarangi" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
