// let firstname = 'Rashila', lastname = 'maharjan', address = 'panga', age = '20';

//let introduction =['Rashila', 'maharjan', 'panga', '20'];
 //introduction.pop();
 //introduction.push('pokhara');
 //console.log(introduction);
 //introduction.shift();
 //console.log(introduction);
 //introduction.unshift('mushroom');
 //console.log(introduction);
//console.log(introduction[2]);
//introduction[2] = 'kirtipur';
//console.log(introduction[2]);
//introduction.push(['kathmandu', 'birgunj']);
//introduction = 'pokhara';
//console.log(introduction);

                   // 0         1           2       3

// console.log(firstname, lastname, address, age);
//console.log(introduction[7]);
//console.log(introduction[0][1]);


//let newArr = [['hello',2,true],['iims','bscit'],['kathmandu','pokhara','dharan']];
//console.log(newArr[2][2]);
//introduction.splice(1, 2, 'berry', 'banana',[1,2]);
// console.log(introduction);

// add joker at index 2 without removing any items
//add joker at 0 index of 2 index value of dc

// let dc = ['superman', 'batman', 'aquaman'];
// let villian = ['joker'];
// let dcHero = ['flash'];
// console.log(dc.concat(villian,dcHero));

// dc.splice(2,0,'joker');
// console.log(dc);
// dc[2].unshift('joker');
// console.log(dc);
// dc.splice(3,0,'joker');
// console.log(dc);
// console.log(dc.length);
// delete dc[1];
// console.log(dc);

// dc.splice(2,1);
// console.log(dc);

// dc.splice(0,3,'hello', 'world');
// console.log(dc);


// first argument passed on slice will include that element but will remove all elements before it
// second argument passed on lsice method will not include element of that index and removes every element after that elemetns including itself 
// let fruits = ["Banana","Orange","Lemon","Apple","Mango"];
// let citrus=fruits.slice(1,2);
// console.log(fruits);
// console.log(citrus);

// let dc = ['superman', 'batman', 'aquaman','flash','wonderwoman'];
// console.log(dc.slice(3));

// let student = {};
// student.firstname='rashila';
// student.lastname='maharjan';
// student.id=191114;
// student.gender='female';
// student.faculty='BIT';
// console.log(student.faculty);

// var person = {firstName:"Rashila", lastName:"Maharjan", age:20, eyeColor:"Black"};
// console.log('Person name is: '+person.firstName + '. His last name is'+ person.lastName);

// let myIntro = {firstName:"Rashila", lastName:"Maharjan", age:20, address:"kirtipur"};
// console.log('Hey nice to meet you all: '+myIntro.firstName+ ' '+myIntro['lastName']+'.I am'+myIntro.age+'. My address is'+myIntro.kirtipur+'.');


// dc.forEach()

// function fullName(firstName, lastName){
//     return firstName + ' ' +lastName;
// }
// let result=fullName('Rashila', 'Maharjan');
// console.log(result);

// let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// country_list.forEach(function(country,index){
//     console.log(index+') '+country); 
// })

// function myPersonalForeach(callbackFunc){
//     return callbackFunc('nepal',0)
// }
// function example(country,index){
//     console.log(index+')'+ country);
// }
// console.log(myPersonalForeach(example));

let numbers = [1,2,3,4,5];
// let newArray = [];
// numbers.forEach(function(value, index){
//         newArray.push(value*2);
// })
// console.log(newArray);

let newArray = numbers.map(function(value,index){
    return value*2;
})
console.log(newArray);