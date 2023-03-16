// // Soal No.1
// function cetakFunction(a) {
//   return `Hallo Nama Saya` + a;
// }

// console.log(cetakFunction("isra"));

//  Soal No.1
function myFunction() {
  return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;

let hasil = myFunction("angka1, angka2");

console.log(hasil);

// Soal No.2
Hello = () => {
  return "Hello";
};

console.log(Hello);

// Soal No. 3
let object = {
  nama: "john",
  umur: 22,
  bahasa: "indonesia",
};

console.log(object.bahasa);

// Soal No. 4
let array = ["John Doe", "laki-laki", "baca buku", 1992];

let obj = {
  nama: array[0],
  kelamin: array[1],
  hobi: array[2],
  lahir: array[3],
};

console.log(obj);

// Soal No. 5
let buah = [
  {
    nama: "nanas",
    warna: "Kuning",
    adaBijinya: "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "Oranye",
    adaBijinya: "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: "tidak",
    harga: 7000,
  },
];

let berbiji = buah.filter((buah) => buah.adaBijinya === "tidak");

console.log(berbiji);
