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
let a = undefined
let b = null
let c = 7

let hasil = a ?? b ?? c ?? 'Whatever'
alert(hasil)
