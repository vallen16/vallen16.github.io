///withoutternary///

const usia = 17;
if (usia >= 18) {
    console.log("Anda sudah dewasa.");
} else {
    console.log("Anda masih di bawah umur.");
}

const nilai= 85;
if (nilai >= 75) {
    console.log("Anda lulus.");
} else {
    console.log("Anda tidak lulus.");
}

const jam_tidur = 22_00;
if (jam_tidur >= 20_00) {
    console.log("selamat malam.");
} else {
    console.log("waktunya anda tidur.");
}

const suhu = 20;
if (suhu >= 35) {
    console.log("panas.");
} else {
    console.log("dingin.");
}

const berat_badan= 45;
if (berat_badan>= 52) {
    console.log("ideal.");
} else {
    console.log("kurus.");
}


///ternaryanswer///

//nilai//
var i=87;//variabel nilai yang dimasukkan//
const ternaryanswer = i > 75 ?"Tuntas": "Remidi"; //?=if,:=else//

//suhu//
var x=22;
const derajat = x > 20 ? "Panas": "Dingin";

//usia//
var y=19;
const umur = y > 20 ? "Dewasa": "Anak-anak";

//tinggi//
var z=167;
const tinggi = z > 165 ? "Tinggi": "Pendek";

//berat badan//
var r=45;
const berat = r > 55 ? "Di Atas Rata-rata": "Di Bawah Rata-rata";

//kode untuk menampilkan hasil//
console.log(ternaryanswer)
console.log(derajat)
console.log(umur)
console.log(tinggi)
console.log(berat)

///ternarywithif///

//nilai//
var i= 46;//variabel yang ingin dimasukkan//
const ternarywithif = i > 80 ? "Lulus" : i < 65? "Remidi": "Tidak Lulus";//?=kemungkinan pertama(if),:=if else, : terakhir=else//

//suhu//
var x= 21;
const celsius = x > 25 ? "Panas" : x > 20? "Normal": "Dingin";

//usia//
var y= 20;
const lama = i > 60 ? "Lansia" : i > 20? "Dewasa": "Anak-anak";

//tinggi badan//
var z= 155;
const pendek = z > 165 ? "Tinggi" : z > 150? "Normal": "Pendek";

//berat badan//
var r= 50;
const ringan = r > 80 ? "Obesitas"  : r > 45? "Normal": "Kurang Gizi";

//kode untuk menampilkan hasil//
console.log(ternarywithif)
console.log(celsius)
console.log(lama)
console.log(pendek)
console.log(ringan)
