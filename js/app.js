"use strict";

let score = 0

let name = prompt ('whts your name')


alert ('hello and welcome '+name + ', thank you for taking this guess game')
alert ('Please answer yes or no only')
function question1(){
let favcolor=prompt ( 'black is my favorite color ')

favcolor=favcolor.toLowerCase()

switch(favcolor){
case'yes':
alert ('incorrect answer ');


break;
case'no':
alert('thats correct');
score++;
break;
default:
    alert('pleas answer whit yes or no only')

}
}
question1()

function question2(){

let favsport=prompt ( 'soccer is my favorite sport')

favsport=favsport.toLowerCase()

switch(favsport){
case'yes':
alert ('thats correct');
score++;
break;
case'no':
alert('incorrect answer');
break;
default:
    alert('pleas answer whith yes or no only')

}
}
question2()
function question3(){
let uni=prompt ( 'I graduated from University of Jordan')

uni=uni.toLowerCase()

switch(uni){
case'yes':
alert ('thats correct');
score++;
break;
case'no':
alert('incorrect answer');
break;
default:
    alert('pleas answer whith yes or no only')

}
}
 question3()


 function question4(){
let favpit=prompt ( 'pony is my favorite pet')

favpit=favpit.toLowerCase()

switch(favpit){
case'yes':
alert ('thats way too wrong');
score++;
break;
case'no':
alert('its obviously correct');
score++;
break;
default:
    alert('pleas answer whith yes or no only')

}
 }
  question4()

  function question5(){
let favtv=prompt ( 'my favorite tv show is Friends')

favtv=favtv.toLowerCase()

switch(favtv){
case'yes':
alert ('yup thats correct, and it should be your favorite too :P ');
score++;
break;
case'no':
alert('obviously incorrect answer -_- ');
break;
default:
    alert('pleas answer whith yes or no only')

}
  }
   question5()

   
alert('you have 4 attempts for the next question')
function question6(){
let correctAnswer = false;

for (let i = 0; i < 4; i++) {

    let num = prompt("guess a number between 1 to 10");
 if (num > 3) {

    alert("too high");

}
else if (num < 3) {

    alert("too low");

}

else if (num == 3) {
    alert ('correct');
    correctAnswer = true;
    score++;
    break;
}    
else{
    alert('please write numbers') 
}
}
if (!correctAnswer) {
   alert('the correct answer is 3') ;
}
}
question6()


alert('you have 6 attempts for the next question')
function question7(){
let suit = ['tie', 'shirt', 'jacket', 'pants']

let correctSuit = false;

for (let j = 0; j < 6; j++) {
    let suitpices = prompt('the suit have 4 pices, name one of them')

    suitpices=suitpices.toLowerCase()
    
    for (let i = 0; i < 4; i++) {
        if(suitpices == suit[i]) {
            correctSuit = true;
            alert("thats correct");
            score++;
            break;
        }
    }
    if(!correctSuit) {
        alert("incorrect answer try again");
    } else {
        break;
    }
}

if (!correctSuit) {
    alert("the right answers are tie, shirt, jacket and pants");
}
}
 question7()
 alert('your score is ' + score + ' /7')