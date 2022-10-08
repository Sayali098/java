const date=new Date (2022, 9 ,8, 10, 53 ,20);
const date1=date.toDateString();
const time=date.toLocaleTimeString();
console.log('date' +date1);
console.log('time' +time);





//to display current date
const dates=new Date();
const d1=dates.getTime();
console.log(d1);
console.log(date);


//to compare date value

const date3=new Date();
const date4=new Date();
console.log(date3);
console.log(date4);
const compare=date3>date4;
console.log(compare);
const compare2=(date3.getTime)==(date4.getTime);
console.log(compare2);
const compare3=date3>=date4;
console.log(compare3);