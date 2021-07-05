let str = "Hello";
let num1 = 5;
let sym = "*";
let bool = 'true';
let sym1 = '';

function creatPadString(str, num1, sym, bool) {
    
    if (!str) {
        return 'error: не введена строка';
    } else if (!num1) {
         return 'error: не введёое число';
} else if (!sym) {
         return 'error: не введён символ';
} else if (!bool) {
         return 'error: не введён параметр булен';
}
    let obj = {
        str,
               }
  
    if (num1 < obj.str.length) {
        return  str.substr(0,num1)
        }
        if (bool === 'true') {
            for (i = 0; i < num1;i++){
                str += sym;
               
            }
            return str;
             
        } else if (bool === 'false'){
            for (i = 1; i <= num1; i++){
               
                sym1 = sym1 + sym;
                
                
            }
            return (sym1+str);
        }
    }




let result = creatPadString(str, num1, sym, bool);
console.log(result);


