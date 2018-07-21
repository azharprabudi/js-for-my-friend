const name = 'siti';
let newName = '';

for (let i = name.length - 1; i >= 0 ;i--) {
    newName += name.charAt(i);
    // newName = newName.concat(name.charAt(i));
}

console.log(newName);
