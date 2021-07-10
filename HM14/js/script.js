function creatPadString(str, num1, sym = " ", bool = true) {
    if (!str) {
        return 'error: не введена строка';
    }
    if (!num1) {
         return 'error: не введёое число';
    }
    let sym1 = '';

    if (num1 < str.length) {
        return  str.substr(0,num1)
     }
    if (bool === true) {
            for (i = 0; i < num1;i++){
                str += sym;             
            }
            return str;      
    }
    if (bool === false) {
            for (i = 1; i <= num1; i++){
               
                sym1 = sym1 + sym;                             
            }
            return (sym1+str);
        }
    }
let result = creatPadString("Hello", 7, "*", false);
console.log(result);


