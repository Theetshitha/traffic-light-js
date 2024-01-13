// "use strict"

// let home_div=document.createElement("div");
// home_div.className="home";
// document.body.append(home_div);

// let main_Div=document.createElement("div");
// main_Div.className="main";
// home_div.append(main_Div);

// var red_btn=document.createElement("button");
// red_btn.id="red";

// var yellow_btn=document.createElement("button");
// yellow_btn.id="yellow";

// var green_btn=document.createElement("button");
// green_btn.id='green';

// var time_btn=document.createElement("button");
// time_btn.id="tim"

// main_Div.append(red_btn,yellow_btn,green_btn,time_btn);

// var Red = document.getElementById('red');
// var Yellow= document.getElementById('yellow');
// var Green = document.getElementById('green');
// var timclk = document.getElementById('tim')

//    var time=0;
//     var r=10;
//     var y=5;
//     var g=10;
// function light(){
    
    
//     if(time < 11){
//         Red.style.backgroundColor ='red';
//         Green.style.backgroundColor='';
//         Yellow.style.backgroundColor='';
//         timclk.innerText=r;
//         r--;
        
        
//     }
//     else if(time >11 && time <= 17){
//         Red.style.backgroundColor='';
//         Yellow.style.backgroundColor='yellow'
//         Green.style.backgroundColor=''
//         timclk.innerText=y;
//         y--;
        
//     }
//     else if(time > 17 && time <= 28){
//         Red.style.backgroundColor='';
//         Yellow.style.backgroundColor='';
//         Green.style.backgroundColor='green'
//         timclk.innerText=g;
//         g--;
//     }
//     if(time==28){
//        time=0;
//        r=10;
//        y=5;
//        g=10;
//     }
//     time++;
// }
// setInterval(light,1000);

// --------------------------------------------------

// function blank(){
//     Red.style.backgroundColor = '';
//     Yellow.style.backgroundColor = '';
//     Green.style.backgroundColor = '';
// }

// function redcolor(){
//     Red.style.backgroundColor = 'red';
// }
// function yellowcolor(){
//     Yellow.style.backgroundColor = 'yellow';

// }
// function greencolor(){
//    Green.style.backgroundColor = 'green';

// }

// Red.addEventListener('mouseover', redcolor);

// Red.addEventListener('mouseout', blank);


// Yellow.addEventListener('mouseover',yellowcolor);

// Yellow.addEventListener('mouseout', blank);


// Green.addEventListener('mouseover', greencolor);

// Green.addEventListener('mouseout', blank);



// --------------------------------------------------------

"use strict"

let home_div=document.createElement("div");
home_div.className="home";
document.body.append(home_div);

let main_Div=document.createElement("div");
main_Div.className="main";
home_div.append(main_Div);

var red_btn=document.createElement("button");
red_btn.id="red";

var yellow_btn=document.createElement("button");
yellow_btn.id="yellow";

var green_btn=document.createElement("button");
green_btn.id='green';

var time_btn=document.createElement("button");
time_btn.id="tim"

main_Div.append(red_btn,yellow_btn,green_btn,time_btn);

var Red = document.getElementById('red');
var Yellow= document.getElementById('yellow');
var Green = document.getElementById('green');
var timclk = document.getElementById('tim')

   var time=0;
    var r=10;
    var y=5;
    var g=10;
function light(){
    
    
    if(time < 11){
        Red.classList.add('red');
        Green.classList.remove('green');
        Yellow.classList.remove('yellow');
        timclk.innerText=r;
        r--;
        
        
    }
    else if(time >11 && time <= 17){
        Red.classList.remove('red');
        Green.classList.remove('green');
        Yellow.classList.add('yellow');
        timclk.innerText=y;
        y--;
        
    }
    else if(time > 17 && time <= 28){
        Red.classList.remove('red');
        Green.classList.add('green');
        Yellow.classList.remove('yellow');
        timclk.innerText=g;
        g--;
    }
    if(time==28){
       time=0;
       r=10;
       y=5;
       g=10;
    }
    time++;
}
setInterval(light,1000);