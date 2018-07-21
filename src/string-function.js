var name = 'AZHAR-PRABUDI';

// substr
console.log(name.substr(-4));

// toLowerCase
console.log(name.toLowerCase());

// toUpperCase
console.log(name.toUpperCase());

// split
name = name.split('-'); // ['azhar', 'prabudi']
name = name.concat('UYE'); // ['azhar', 'prabudi', 'uye']
name = name.join(' '); 'azhar prabudi uye';
console.log(name);

// charAt
console.log(name.charAt(9999));