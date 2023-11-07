const displayScreen = document.getElementById('display');
const numBtn = document.querySelectorAll('.number');
const opeBtn = document.querySelectorAll('.operator');
const getResult = document.getElementById('equal');
const clearBtn = document.getElementById('clear');

let curNum = '0';
let operator = '';
let preNum = '';


for(let i = 0; i<numBtn.length; i++){
    numBtn[i].addEventListener('click',function(e){
        let n = e.target.textContent;
        updateCurNum(n);
        console.log(preNum,operator,curNum);
        display(onScreen(preNum,operator,curNum));
    });
};

for(let i = 0; i<opeBtn.length; i++){
    opeBtn[i].addEventListener('click',(e)=>{
        updatePreNum();
        operator = e.target.textContent;
        curNum = '';
        console.log(preNum,operator,curNum);
        display(onScreen(preNum,operator,curNum));
    });
}

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
    curNum = '0'; 
    displayScreen.innerText = 0;
    console.log(preNum,operator,curNum);

    })

function updateCurNum(input){
    if(curNum.length >=12){
        return;
    }
    if (input === '.'){
        if(!curNum){
            curNum = '0.';
        }else if(!curNum.includes('.')){
            curNum = `${curNum}.`;
        }

    }else{
        if(curNum === '0'||curNum ===""){
            curNum = input;
        }
        else{
            curNum = `${curNum}${input}`;
        }
    }  
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
    if(!preNum&&preNum !== 0||!operator){
        preNum = (100000*curNum).toFixed()/100000;       
    }else{
        preNum= (calculate()*100000).toFixed()/100000;
    };
};}



function display(string){
    displayScreen.innerText = string;   
    console.log(string.length); 
    if (string.length<=10||!string.length){
        displayScreen.style.fontSize ="70px";
        displayScreen.style.lineHeight ="120px";
        displayScreen.style.wordBreak ="break-all";
    }else if(string.length<=14){
        displayScreen.style.fontSize ="55px";
        displayScreen.style.lineHeight ="120px";
        displayScreen.style.wordBreak ="break-all";
    }else{
        displayScreen.style.lineHeight ="60px";
        displayScreen.style.wordBreak ="break-all";
    }
}

function onScreen(num1,operator,num2){
    if(num2){
        if(!num1&&num1!==0||!operator){
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





