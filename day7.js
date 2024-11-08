// Array
let  angka = [] 
let buah = ["anggur","nana","jeruk","apel","mangga"]

// mengambil semua data array
console.log(buah);

// mengambil salah satu data dari array
console.log(buah[4]);

// menambah data di akhir array
angka.push(6);
console.log(angka);

// menambah data di awal array
buah.unshift("pisang");
console.log(buah);

// menghapus data di akhir array
angka.pop();
console.log(angka);

// menghapus data pertama di array
angka.shift();
console.log(buah);

// menghitung jumlah data di  array
console.log(buah.length);

// for each
buah.forEach(function(item,index) {
    console.log(item,index);
    
});

// asynchronous javascript

//  // call back
function getData(callback) {
    setTimeout(async () => {
        const API = await fetch(
            "https://fortunate-burnt-sweateshirt.glitch.me/user/3"
         );
         const Data = await API.josn();
         callback(data)
         }, 3000 );
}
    function displaydata(data) {
        console.log(data);
    }
    getData(displaydata);

// promise
let promise = new Promise((resolve, reject) => {
    let (succes) = true;
    setTimeout(() => {
        if (succes) {
            resolve("Operasi Berhasil");
        } else {
            reject("Operasi Gagal");
        }
    }, 3000);
});

promise.then((message) => {
    console.log(message); 
}) .catch((error) => {
    console.log(error); 
})