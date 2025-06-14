// Immediately Invoked Function Expression (IIFE)--

(function one() {
  // named iife
  console.log(`DB Connected`);
})();

// unknown iife
((name) => {
  console.log(`DB Connected ${name}`);
})("Swarangi");
