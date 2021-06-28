let str = prompt('Введите строку', '');
let num1 = prompt('Введите число');
let sym = prompt('Введите символ');
let bool = prompt('Введите true или false' );
let sym1 = '';
switch (true) {
   case Boolean(str) === false :
str = undefined;
  case  Boolean(num1) === false :
num1 = undefined;
  case  Boolean(sym) === false :
sym = undefined;
  case  Boolean(bool) === false :
    bool = undefined;
}

function creatPadString(str, num1, sym, bool) {
    
    if (str === undefined) {
        return alert('Не введённая строка');
    } else if (num1 === undefined){
return alert('Не введённый номер');
    } else if (sym === undefined){
return alert('Не введённый символ');
    } else if (bool === undefined){
return alert('Не введённый Bool');
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


