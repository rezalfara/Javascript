let nilai = 9

//bisa tanpa kurung kurawal, jika isi di dalam if sebaris
// if (nilai > 8) alert('Predikat : A')
// else alert('Predikat : B')

//ternary operator
//? = if, : = else
// let hasil = (nilai > 8)
//              ? 'Predikat A' 
//              : (nilai > 7 && nilai <= 8)
//                 ? 'Predikat B'
//                 : (nilai > 6 && nilai <= 7)
//                 ? 'Predikat C'
//                 : 'Predikat D'

// alert(hasil)


//Logika OR
// let warna = 'hitam'

// if (warna == "merah" || warna == "biru" || warna == "kuning") alert('Warna Primer')
// else alert('Bukan Warna Primer')


//Null coalescing
//undefined dan null dianggap tidak ada nilai
//di cek dari yang paling kiri
// let a = undefined
// let b = null
// let c = 7

// let hasil = a ?? b ?? c ?? 'Whatever'
// alert(hasil)


// Function declaration
// function first() {
//     alert('Hello World')
// }

// first()


// Function dengan parameter
// function luasPersegiPanjang(panjang, lebar) {
//     alert(panjang * lebar)
// }

// luasPersegiPanjang(5, 4)


// Local & Global variable
// let global = 'ini global variable'

// function tesFunction() {
//     let local = 'ini local variable'
// }

// tesFunction(alert(global))


// Default value parameter
// function hitungLuasPersegi(panjang, lebar = 2) {
//     alert(panjang * lebar)
// }

// hitungLuasPersegi(5)


// Function return value
// function hitungLuasPersegi(panjang, lebar = 2) {
//     let hasil = panjang * lebar
//     return hasil
// }

// let persegiPanjang1 = hitungLuasPersegi(5, 4)
// let persegiPanjang2 = hitungLuasPersegi(3)

// alert('Persegi panjang 1 luasnya : ' + persegiPanjang1)
// alert('Persegi panjang 2 luasnya : ' + persegiPanjang2)


// Function expression (bisa menggunakan parameter juga)
// function expression tidak bisa dipanggil diatas functionnya, sedangkan function declaration bisa
// let fungsi2 = function(){
//     alert('This is function expression')
// }

// fungsi2()