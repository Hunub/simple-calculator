const enterNum = document.querySelector('#numBtn');
const enterOpe = document.querySelector('#opeBtn');
const getResult = document.getElementById('equBtn');
const cleerBtn = document.getElementById('clearBtn');

const displayScreen = document.getElementById('display');

let curNum = '';
let operator = '';
let preNum = '';

function updateCurNum(input){
    if (input === '.'){
        if(!curNum){
            curNum = '0.';
        }else if(!curNum.includes('.')){
            curNum = `${curNum}.`;
        }

    }else{
        if(curNum){
            curNum = `${curNum}${input}`;
        }else{
            curNum = input;
        }
    }   
};

function updateOpe(input){
operator = input;
};



function calculate(){
        let a = 1*preNum;
        let b = 1*curNum;
        if(operator === '÷' && b===0){
            alert("ERROR");
            return "";
        }else{
            switch(operator){
            case '+' : return a+b;
            case '-' : return a-b;
            case '×' : return a*b;
            case '÷' : return a/b;
            };
        }
    };


function updatePreNum(){
if(curNum){
    if(!operator||!preNum){
    preNum = (1*curNum).toFixed(6)*10/10;
    }else{
    preNum= calculate().toFixed(6)*10/10;
    };
};}



function display(string){
    displayScreen.innerText = string;
}

function onScreen(num1,operator,num2){
    if(num2){
        if(!num1||!operator){
            return  num2;
        }else{
            return `${num1}${operator}${num2}`;
        }
    }else{
        if(num1){
            return `${num1}${operator}`;
        }else{
            return num1;
        }
    }
}

enterNum.addEventListener('click',function(){
let n = prompt('number');
updateCurNum(n);
console.log(preNum,operator,curNum);
display(onScreen(preNum,operator,curNum));
});

enterOpe.addEventListener('click',function(){
let n = prompt('operator');
updatePreNum();
updateOpe(n);
curNum = '';
console.log(preNum,operator,curNum);
display(onScreen(preNum,operator,curNum));
})

getResult.addEventListener('click',function(){
updatePreNum();
operator = '';
curNum = '';
console.log(preNum,operator,curNum);
display(onScreen(preNum,operator,curNum));
})

clearBtn.addEventListener('click', function(){
preNum = '';
operator = '';
curNum = '';
console.log(preNum,operator,curNum);
display(onScreen(preNum,operator,curNum));
})