//require được module thì sẽ dùng webpack
const sum = require('./math')

const total = sum(3,5)
console.log(total)

document.write(total)