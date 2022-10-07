const person={
    name:'john',
    age:35
}
for(let key in  person)
{
    let value;
    value=person[key];
    console.log(key + " " + value);
}



//  using objectentries

var  person1={
    name:'peter',
    age:35
}
let key;
let value;
for([key, value] of Object.entries(person1))
{

    console.log(key  +" "  +value) ;
}

