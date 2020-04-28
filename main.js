for(let i = 2; i <11; i++){
    if (i% 2 == 1) continue;
    console.log(i);
}

let i = 0;
while (i <3){
    alert(`number ${i}!`);
    i++;
    console.log(i);
}

/* for(let i = 0; i <3; i++){
    alert(`number ${i}!`);
    console.log(i);
} */

var number = 5;
var result = 1;
for (i = 0; i < number; i++){
    result = result * (number - i);
}
console.log(result);


//Homework pt2
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:    
        alert( '2,3' );
        break;
    default:
        break;
}

/* let a = +prompt('a?', '');
if (a ==0){
    alert( 0 );
}
if (a ==1){
    alert( 1 );
}
if (a==2 || a==3) {
    alert('2,3');
} */


//Homework pt3
let browser = 'Chrome';

if (browser == 'Edge'){
alert("You've got the Edge!");
} else if (browser == 'Chrome') {
    alert('Okay we support these browsers too');
} else if (browser == 'Firefox') {
    alert('Okay we support these browsers too');
} else if (browser == 'Safari') {
    alert('Okay we support these browsers too');
} else if (browser == 'Opera') {
    alert('Okay we support these browsers too');
}else {
  alert('We hope thet this page looks ok!' );
}

/*switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
    default:
        alert('We hope thet this page looks ok!' );
        break;
}*/