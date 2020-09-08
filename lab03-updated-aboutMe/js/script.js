'use strict';
// var userName = prompt('What Is your Name?'); userName.toLowerCase();
// alert('Welcome Mr/Ms. ' + userName + ' To Abdullah Blog');
// var whoWantToGus =confirm('Would You Like to Play a Gusseng Game Mr/Ms. ' + userName);
// //If He/she Does not want to play and choose no how can we end the script right here!!
// alert(' Mr/Ms ' + userName + ' Your answers Shoud be y/n or yes/no');
// var majorName = '';
//     majorName =prompt('IS my Major Statistc?'); majorName.toLowerCase();
// if (majorName == 'n' || majorName === 'no'){
//     alert('Wrong Answer, My major Is statistic');
//     console.log('Wrong Answer, My Major Is statistic');
// }else{
//     alert('Correct Answer');
// console.log('Correct Answer My Major is Statistic');
// }
// var uniName='';
//     uniName = prompt('My University Name was University of Jordan?'); uniName.toLowerCase();
// if (uniName === 'yes' || uniName === 'y'){
//     alert('Correct Anser');
// console.log('You Are Gamer Man, Perfect');
// }else{
//     alert('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
//     console.log('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
// }
// var graduatedYear= 2010; //How Can I define numarical Variables without assigning values!!
//     graduatedYear= prompt(' My Grad Year was in 2010?'); graduatedYear.toLowerCase();
// if(graduatedYear !== 'no' && graduatedYear !== 'n'){
//     alert('You are A big Gamer My dear, Correct Answer');
//     console.log('Correct Answer');
// }else{
//     alert('Your Answer Is Wrong, My Grad Year Was in 2010');
// }
// var firstWork= '';
//     firstWork= prompt('My first Work was Data analyst?'); firstWork.toLowerCase();
// if(firstWork !== 'no' && firstWork !== 'n'){
//     alert('You are A big Gamer My dear, Correct Answer');
//     console.log('Correct Answer');
// }else{
//     alert('Your Answer Is Wrong, My first work was Data analyst');
//     console.log('Your Answer Is Wrong, My first work was Data analyst');
// }

//    whoWantToGus=confirm('Are You Getting Enough Joy Dear? Would you like to go on?');

// var secondWork= 'Methodologist';
//     secondWork= prompt('My Second Work was Methodologist?'); secondWork.toLowerCase();
// if(secondWork !== 'no' && secondWork !== 'n'){
//     alert('You are A big Gamer My dear, Correct Answer');
//     console.log('Correct Answer');
// }else{
//     alert('Your Answer Is Wrong, My Second work was Metho..');
//     console.log('Your Answer Is Wrong, My Second work was Metho..');
// }


//Question 6 Lab 03 
// var userNam = prompt('what is your name ?');
// var userNum = Number(userNum);

// for (var i = 0; i < 4; i++) {

//     userNum = prompt('Guess The Number Of The Top Places that I Have Visited!');
//     if (userNum >= 5) {
//         alert('Your Answer Is Too High');
//     } else if (userNum <= 3) {
//         alert('Your Answer Is Too Low');
//     } else{
//         alert('Your Answer Is Correct!');
//         break;
//     }
// while ( i >= 3 ){
//     alert('Dear ' + userNam + ' The correct Answers lie between 1-10!');
//     break;
// } 
// }


//َQuestion 7 Lab 03
//list of my fav colors as an array!!!
//var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
//The User will try to Guess one of My fav colors !!!


// Mainloop: 
// for(var x = 0; x <= 6; x++){
// var userAnswer = prompt('Guess one of my fav colors and type it here?');
//     childloop:
//     for (var j = 0; j < favColor.length; j++) {
//         if( userAnswer === favColor[j]){
//             alert('Your Answer Is Corrct!!');
//             break Mainloop;
//        }else{
//             alert('Your Answer is incorrect, Try again');
//         }
//     }
    
    
// }

var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
//The User will try to Guess My fav colors at least one of them!!!
var userAnswer;  //Empty string --> false 
var break1 = 'false';
// Mainloop: 
for(var x = 0; x < 6; x++){
    userAnswer = prompt('Guess one of my fav colors and type it here?');
    // childloop:
    for (var j = 0; j < favColor.length; j++) {
        if( userAnswer === favColor[j]){
            alert('Your Answer Is Corrct!!');
            break1 = 'true' ;
            break;
            // break Mainloop;
    //    }else{
    //         alert('Your Answer is incorrect, Try again');
    //     }
    }
}
if( break1 ==='true'){
    break;
}
}

