var num1 = +prompt('Введите первое число');
var num2 = +prompt('Введите второе число');
var num3 = +prompt('Введите третье число');
console.log(num1);
console.log(num2);
console.log(num3);
if(num1 > num2 && num1 < num3){
    alert (num1);
    console.log(num1);
}else if(num1 < num2 && num1 > num3){
    alert(num1);
    console.log(num1);
}else if(num1 > num2 && num2 > num3){
    alert (num2);
    console.log(num2);
}else if(num2 < num3 && num2 > num1){
    alert(num2);
    console.log(num2);
}else if(num1 > num2 && num3 > num2 < num1){
    alert(num3);
    console.log(num3);
}else if(num3 > num1 && num3 < num2){
    alert(num3);
    console.log(num3);
}else{
    alert('ОшибОчка');
    console.log('ОшибОчка');
}
