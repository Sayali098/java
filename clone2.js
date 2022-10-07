const person={
    name:'john',
    age:24,
    marks:67

};
const persondetail=Object.assign({},person);
console.log(persondetail);
 persondetail.name='peter';
 console.log(persondetail);
 console.log(person.name);

