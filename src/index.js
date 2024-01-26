//require được module thì sẽ dùng webpack
//không dùng require nửa dùng import vì đã có babel loader
//const sum = require('./math')

import sum from './math'  //lúc này webpack bundle chạy bình thường

const total = sum(3,5)
console.log(total)

document.write(total)