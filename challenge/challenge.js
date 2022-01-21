console.log('challenge 1');
function challenge1(){
    let array = [2, 5, 10, 'ini dia', 'data', 100, 38];
    if(array.length <50){
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            console.log(element);
        }
    }
    else{
        console.log(true);
    }
}
challenge1();

console.log('challenge 2');
function challenge2(b){
    let array = [3, 100, 283, 'saya', 'adalah', 'kapiten', 75];
    if(b+array.length != 32){
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            console.log(element);
        }
    }
    else{
        console.log(true);
    }
}
challenge2(1);

console.log('challenge 3');
function challenge3(a){
    let array = [29, 12, 30, 'ini', 'saya', 85];
    if(array.length + a == 28){
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            console.log(element);
        }
    }
    else{
        console.log(true);
    }
}
challenge3(1);

console.log('challenge 4');
function challenge4(){
    let array = [20, 12, 43, 54, 24];
    if(array.length + 1 != 35){
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            console.log(element);
        }
    }
    else{
        console.log(true);
    }
}
challenge4();

console.log('challenge 5');
function challenge5(x){
    let array = [20, 'empat', 'limat', 8, 29, 30];
    if(x + array.length != 35){
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            console.log(element);
        }
    }
    else{
        console.log(true);
    }
}
challenge5(2);

console.log('challenge 6');
function challenge6(c, a){
    let array = ['data', 'empat', 8, 3, 100, 8, 100, 3];
    if(c + array.length + a != 25){
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            console.log(element);
        }
    }
    else{
        console.log(true);
    }
}
challenge6(2, 1);