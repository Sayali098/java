function calculator()
{

    var result;
    const  operators=prompt('enter the '+','-'');

    var num1=prompt('enter the number one');
var num2=prompt('enter the number two');

switch(operators)
{
    case('+'):
              result=(+num1)  +( +num2);
              return  result;
             // console.log(( result));
    break;

case('-'):
         result=parseInt(num1)-parseInt(num2);
         return result;
         break;
       
  case('*'):
          result=num1*num2;
          console.log(result);
break;
case('/'):
          result=num1/num2;
          console.log(result);
          break;
          


         default:
            console.log(`Sorry, we are out of program.`);

   

}
}
console.log(calculator());