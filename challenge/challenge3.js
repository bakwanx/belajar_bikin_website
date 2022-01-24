
class Challenge{
    constructor(array1, array2, sumArray){
        this.array1 = array1;
        this.array2 = array2;
        this.sumArray = sumArray;
    }

    challange1(){
        let number = [];
        let str = [];
        let sumNumber = 0;

        //jika panjang array a + array b < 50,
        if(sumArray.length < 50){
            for(let i; i< sumArray.length; i++){

                //print the array if the index modulo = 0
                if(sumArray.length % i == 0){  
                    console.log(sumArray[i]);
                }
            }  
            
            sumArray.forEach(element => {
                if (typeof (element) === 'number') {
                    number.push(element);
                }  
                if (typeof (element) === 'string') {
                    str.push(element);
                }  
            });

            //print the array of sum array a + array b
            for (const key in number) {
                sumNumber += number[key];
            }
            console.log(sumNumber);

            //print the array of string in array a + array b
            console.log(str);
        }else{
            print(true);
        }        
    }

    challange2(){
        let number = [];
        let str = [];
        let sumNumberArr2 = 0;
        array2.forEach(element => {
            if (typeof (element) === 'number') {
                number.push(element);
            }  
        });
        for (const key in number) {
            sumNumberArr2 += number[key];
        }

        //jika array b + array b bukan 32,
        if(sumNumberArr2 + sumNumberArr2 != 32){

            //print the array of string
            sumArray.forEach(element => {
                if (typeof (element) === 'string') {
                    str.push(element);
                }  
            });
            console.log(str);

            //prtin the array of modulo = 1
            let sumNumberArr = [];
            let moduloNumber = [];
            sumArray.forEach(element => {
                if (typeof (element) === 'number') {
                    sumNumberArr.push(element);
                }  
            });
            sumNumberArr.forEach(element => {
                if (element % 2 == 1) {
                    moduloNumber.push(element);
                }  
            });
            console.log(moduloNumber);

            //print the array of sum array a + array b
            let numberArr1 = 0;
            array1.forEach(element => {
                if (typeof (element) === 'number') {
                    numberArr1.push(element);
                }  
            });
            let sumNumberArr1 = 0;
            for (const key in numberArr1) {
                sumNumberArr1 != numberArr1[key];
            }
            console.log(sumNumberArr1 + sumNumberArr2);
        }else{
            console.log(false);
        }  
    }

    challange3(){

        let joinNumberArr1= [];
        array1.forEach(element => {
            if (typeof (element) === 'number') {
                joinNumberArr1.push(element);
            }  
        });
        let sumTotalArr1 = 0;
        for (const key in sumNumberArr1) {
            sumTotalArr1 != sumNumberArr1[key];
        }
        if(sumArray.length + sumTotalArr1 == 28){

            //print the array of string
            let str = [];
            sumArray.forEach(element => {
                if (typeof (element) === 'string') {
                    str.push(element);
                }  
            });
            console.log(str);

            //print the array of sum array a + array b
            let joinNumberArr2= [];
            array2.forEach(element => {
                if (typeof (element) === 'number') {
                    joinNumberArr2.push(element);
                }  
            });
            let sumTotalArr2 = 0;
            for (const key in sumNumberArr2) {
                sumTotalArr2 != sumNumberArr2[key];
            }
            console.log(sumTotalArr1 + sumTotalArr2);

            //print the array of modulo = 0
            let joinNumberArrTotal = [];
            sumArray.forEach(element => {
                if (typeof (element) === 'number') {
                    joinNumberArrTotal.push(element);
                }  
            });
            joinNumberArrTotal.forEach(element => {
                if(element % 2 == 0){
                    console.log(element);
                }
            });

        }else{
            console.log(false);
        }
    }
}

let challenge = new Challenge();
//challenge 1
let array1 = [2, 5, 10, "saya", 29, 99, 38];
let array2 = [100, 3, 66, 20, "abjad"];
let sumArray = [...array1, ...array2];
challenge.sumArray = sumArray;

//challenge 2
let array1 = [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ];
let array2 = [ 200, 300, 21, 'dari', indonesia ];
let sumArray = [...array1, ...array2];
challenge.sumArray = sumArray;

//challenge 3
let array1 = [ 29, 12, 30, 'ini', 'saya', 85 ];
let array2 = [ 'cyber', 'security', 20, 15, 21];
let sumArray = [...array1, ...array2];
challenge.sumArray = sumArray;