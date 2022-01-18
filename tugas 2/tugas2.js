const prompt = require('prompt-sync')();
const loading = ['\\', '|', '/', '-'];
const wifi = ['wifi1','wifi2'];
const password = ['123', '321'];
let x = 0;

let loader = setInterval(function() {
    process.stdout.write('\r'+loading[x++]);
    if(x == 4){
        x = 0;
    }
}, 250);

setTimeout(() => {
    clearInterval(loader);
    console.log('computer hidup, pilih wifi');
    for(let i=1; i<=wifi.length; i++){
        console.log(`${i} .${wifi[i-1]}`);
    }
    
    let choice = prompt('masukkan urutan wifi : ');
    if(choice == 1){
        let wifi1 = prompt('masukkan password wifi 1 : ');
        if(wifi1 == password[0]){
            console.log('Berhasil terhubung ke internet !!!');
        }else{
            console.log('Password salah !!!');
        }
    }else if(choice == 2){
        let wifi2 = prompt('masukkan password wifi 2 : ');
        if(wifi2 == password[1]){
            console.log('Berhasil terhubung ke internet !!!');
        }else{
            console.log('Password salah !!!');
        }
    }else{
        console.log('Wifi tidak terdaftar');
    }
}, 3000);


/*
Pseudocode

deklarasi:
    const prompt = require('prompt-sync')();
    const loading = ['\\', '|', '/', '-'];
    const wifi = ['wifi1','wifi2'];
    const password = ['123', '321'];
    let x = 0;

algoritma:
    loading 3 second

    Output list wifi
    INPUT number
    
    IF (number == 1) THEN
        OUTPUT "Wifi1"
        INPUT password
        IF (password == wifi[0]) THEN
            OUTPUT "terhubung internet"
        ELSE THEN
            OUTPUT "password salah"
    ELSE IF (number == 2) THEN
        OUTPUT "Wifi2"
        INPUT password
        IF (password == wifi[1]) THEN
            OUTPUT "terhubung internet"
        ELSE THEN
            OUTPUT "password salah"
    ELSE THEN
        OUTPUT "wifi tidak terdaftar"
*/
