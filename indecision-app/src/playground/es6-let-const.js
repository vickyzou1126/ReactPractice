var nameVar = 'Mike';
var nameVar = 'Mike1';
console.log('nameVar', nameVar)

let namelet = 'Jen';
namelet = 'New Jen';
console.log('namelet', namelet)

const nameconst = 'Jen Const';
console.log('nameconst', nameconst)

var fullName = 'A B'
if (fullName) {
    var firstName = fullName.split(' ')[0]  // var block scoping
    console.log(firstName)
}

console.log(firstName)
