const enterNum = document.querySelector('#numBtn');
const enterOpe = document.querySelector('#opeBtn');
const getResult = document.getElementById('equBtn');
const cleerBtn = document.getElementById('clearBtn');

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

function roundNum(num){}

function updatePreNum(){
if(curNum){
    if(!operator||!preNum){
    preNum = (1*curNum).toFixed(3)*10/10;
    }else{
    preNum= calculate().toFixed(3)*10/10;
    };
};}

function display(num1,operator,num2){
    if(num2){
        if(!num1||!operator){
            return  num2;
        }else{
            return `${1*num1}${operator}${1*num2}`;
        }
    }else{
        if(num1){
            return `${1*num1}${operator}`;
        }else{
            return num1;
        }
    }
}

enterNum.addEventListener('click',function(){
let n = prompt('number');
updateCurNum(n);
console.log(display(preNum,operator,curNum));
});

enterOpe.addEventListener('click',function(){
let n = prompt('operator');
updatePreNum();
updateOpe(n);
curNum = '';
console.log(display(preNum,operator,curNum));
})

getResult.addEventListener('click',function(){
updatePreNum();
alert(preNum);
operator = '';
curNum = '';
console.log(display(preNum,operator,curNum));
})

clearBtn.addEventListener('click', function(){
preNum = '';
operator = '';
curNum = '';
console.log(display(preNum,operator,curNum));
})