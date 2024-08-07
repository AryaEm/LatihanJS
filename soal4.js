const a = 4
const b = 3
const c = 10

let sum = 0 

for (let i = 0; i < c; i++) {
    sum += a * Math.pow(b, i)
}

console.log("jumlah10 suku pertama dari deret geometri adalah: " + sum)