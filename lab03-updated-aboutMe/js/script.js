'use strict';
//intro
var score=0;

// Intro Function 

function userIntro(userName)
{

   userName= prompt('What Is your Name?').toLowerCase();

    alert('Welcome Mr/Ms. ' + userName + ' To Abdullah Blog');
   
    var whoWantToGus =confirm('Would You Like to Play a Gusseng Game Mr/Ms. ' + userName);
    alert(' Mr/Ms ' + userName + ' Your answers Shoud be y/n or yes/no');
//If He/she Does not want to play and choose no how can we end the script right here!!
   
}

var userName = '';
 userName.toLowerCase();
 userIntro(userName);
 console.log(" welcom " + userName);





// Question 1 Function  !!!!

var majorName = ''; 

function major( majorName)
{

    
if (majorName == 'n' || majorName === 'no'){
    alert('Wrong Answer, My major Is statistic');
    console.log('Wrong Answer, My Major Is statistic');
}else{
    alert('Correct Answer');
    score++;
console.log('Correct Answer My Major is Statistic');

}
}


    majorName =prompt('IS my Major Statistc?'); 
    majorName.toLowerCase();
    major(majorName);


//Question 2  Funation !!!!
var uniName='';
uniName = prompt('My University Name was University of Jordan?').toLowerCase();

university(uniName);

function university(uniName)
{
   
if (uniName === 'yes' || uniName === 'y'){
    alert('Correct Anser');
    score++;
console.log('You Are Gamer Man, Perfect');
}else{
    alert('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
    console.log('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
}
}


//Question 3 Function !!!!!
var graduatedYear= 2010; //How Can I define numarical Variables without assigning values!!
    graduatedYear= prompt(' My Grad Year was in 2010?'); graduatedYear.toLowerCase();
  gradYear(graduatedYear);

function  gradYear(graduatedYear){

if(graduatedYear !== 'no' && graduatedYear !== 'n'){
    alert('You are A big Gamer My dear, Correct Answer');
    console.log('Correct Answer');
    score++;
}else{
    alert('Your Answer Is Wrong, My Grad Year Was in 2010');
}


//Question 4 Function !!!!

var firstWork= '';
    firstWork= prompt('My first Work was Data analyst?'); firstWork.toLowerCase();

    fWork(firstWork);

    function fWork( firstWork)
    {

if(firstWork !== 'no' && firstWork !== 'n'){
    alert('You are A big Gamer My dear, Correct Answer');
    console.log('Correct Answer');
    score++;
}else{
    alert('Your Answer Is Wrong, My first work was Data analyst');
    console.log('Your Answer Is Wrong, My first work was Data analyst');
}
    }
}

//Question 5 Function !!!!

  var whoWantToGus=confirm('Are You Getting Enough Joy Dear? Would you like to go on?');
var secondWork= 'Methodologist';
    secondWork= prompt('My Second Work was Methodologist?'); secondWork.toLowerCase();

    scWork(secondWork);

    function scWork(secondWork)
    {

if(secondWork !== 'no' && secondWork !== 'n'){
    alert('You are A big Gamer My dear, Correct Answer');
    console.log('Correct Answer');
    score++;
}else{
    alert('Your Answer Is Wrong, My Second work was Metho..');
    console.log('Your Answer Is Wrong, My Second work was Metho..');
}
    }

//Question 6 function Lab 04 !!!!!

var userNam = prompt('what is your name ?');
userNum = prompt('Guess The Number Of The Top Places that I Have Visited!');
var userNum = Number(userNum);
userNumber(userNum);

function userNumber(userNum){

for (var i = 0; i < 3; i++) {
    
    if (userNum >= 5) {
        alert('Your Answer Is Too High');
        userNum = prompt('Guess The Number Of The Top Places that I Have Visited!');
    } else if (userNum <= 3) {
        alert('Your Answer Is Too Low');
        userNum = prompt('Guess The Number Of The Top Places that I Have Visited!');
    } else{
        alert('Your Answer Is Correct!');
        score++;
        break;
    }
   
    // i=0
    //i=1
    //i=2
    //i=3
while ( i >= 2 ){
    alert('Dear ' + userNam + ' The correct Answer is 4 ');
    break;
} 
}
}
//َQuestion 7 Function Lab 04 !!!!!
// My array defines  my fav colors !!!
// The User will try to Guess one of My fav colors !!!

var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
var userAnswer = prompt('Guess one of my fav colors and type it here?').toLowerCase();
    fColor(favColor);

function fColor(favColor)
{
for(var x = 0; x < 5; x++){

    for (var j = 0; j < favColor.length; j++) {
        if( userAnswer === favColor[j]){
            alert('Your Answer Is Corrct!!');
            break ;}
       }
    if (userAnswer === favColor[j]){
        break;
        score++;
    }
        else{
        alert('Your Answer is incorrect, Try again');}
}
}
alert('Your score is ' +score+'out of  7');

