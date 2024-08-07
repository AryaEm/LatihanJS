let panjang = 20.5
let lebar = 30
let hargaPerMeter = 1500000
let ppn = 0.15

let luasTanah = panjang * lebar
let hargaTanah = luasTanah * hargaPerMeter
let hargaTotal = hargaTanah + (hargaTanah * ppn)

console.log("Luas tanah: " + luasTanah + " m2");
console.log("Harga tanah sebelum PPN: Rp " + hargaTanah.toLocaleString());
console.log("Harga total setelah PPN: Rp " + hargaTotal.toLocaleString());


// let tanah = {
//   panjang: 20.5,
//   lebar: 30,
//   hargaPerMeter: 1500000,
//   ppn: 0.15,

//   get luasTanah() {
//     return this.panjang * this.lebar;
//   },

//   get hargaTanah() {
//     return this.luasTanah * this.hargaPerMeter;
//   },

//   get hargaTotal() {
//     return this.hargaTanah + this.hargaTanah * this.ppn;
//   },
// };
