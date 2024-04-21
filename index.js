// Console log
console.log('halo dunia!');

// Variabel
let nama = 'Faris';
console.log(nama);

// jangan pake kata kata yang sama
// harus kata kata yang jelas
// tidak boleh berawalan angka x(1nama)x
// tidak boleh pake spasi atau simbol (-)
// variable peka huruf besar-kecil

let NamaAlias = 'Yoga', NamaAsli = 'Faris';
 console.log(NamaAlias, NamaAsli);

// constant
// const sama seperti let tetapi dia adalah variabel absolut atau tidak bisa diubah
const Aku = 10;
Aku = 11;
console.log(Aku);
// kalian akan melihat error jika melakukan hal diatas

// primitive type
// String, Number, Boolean, Undefined, Null
let name = 'Faris'; // ini String
let age = '100'; // ini number
let iniBenar = true; // ini boolean true/false
let namaSaya = undefined; // ini undefined
let WarnaItu = null; // ini adalah null

// javascript adalah Dynamic language

// Reference types
// Object{}, Array[], Function()
// ini Object
let seseorang = {
    name: 'Y',
    age: '100',
}
 // Dot Notation
 seseorang.name = 'Faris';

 // Bracket Notation
 seseorang['name'] = 'Yoga';

 // ini Array
 let select = ["kamu", 'aku'];
 select[2] = 'dia';
 // length memberi tahu berapa banyak elemen
 console.log(select.length);

 // ini function  
 function saya(nama, NamaAlias) {
    console.log('saya' + nama + " " + NamaAlias);
 }

// memanggil function
 saya('Frzzly');
 saya('Faris', 'Frzzly');

// menghitung hasil
 function hitungan(number) {
    return number * number;
 }

 console.log(hitungan(10));