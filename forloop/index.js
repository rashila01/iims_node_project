// let fruits = ['apple','mango','banana'];
// for (let i = 0; i<3 ; i++){
//     console.log(fruits[i]);
// }

class MyIntro{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

fullName(){
    return this.firstName + ' ' + this.lastName;
  }
}

let intro = new MyIntro('Rashila', 'Maharjan');
console.log(intro.fullName());