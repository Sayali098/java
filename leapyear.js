function leapyear (year){

    if((year%4 == 0) && (year%100!==0) || (year%400==0 ))
    {
        console.log('year is leap');

    }
    else{
        console.log('year is not leap year');
    }
}
console.log(leapyear(2020));