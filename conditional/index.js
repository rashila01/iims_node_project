let x= 5;
let y= 6;
// == will check value only but === will check value with same data type
// console.log(x==y);

// function calculateTax(salary){
//     let tax = 0;
//     if(salary <= 400000){
//          tax = (1/100) * salary;
//     } else if(salary > 400000 && salary<= 700000){
//         tax = (10/100) * salary;
//     } else if(salary > 700000){
//         tax = (20/100) * salary;
//     }
//     return tax;
// }
// let mytax = calculateTax(800000);
// console.log('Your tax to be paid:', mytax);

function switchLight(str){
    switch(str){
        case 'on':
            console.log('your switch is on');
            break;
        case'off':
            console.log('your switch is off');
            break;
        default:
            console.log('your switch is neither on nor off');
}
}
switchLight('on')