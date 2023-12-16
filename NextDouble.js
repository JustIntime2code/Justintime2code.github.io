var MyNum = 0;
var FirstNumber = 0;
var FirstOpperation = "";
var SecondNumber = 0;
var SecondOpperation = "";
var ThirdNumber = 0;
var ThirdOpperation = "";
var FourthNumber = 0;
var FourthOpperation = "";
var FifthNumber = 0;
var FirstSkipped = false;
var SecondSkipped = false;
var ThirdSkipped = false;
var FourthSkipped = false;
var FirstContinue = false;
var SecondContinue = false;
var ThirdContinue = false;
var FourthContinue = false;
var Shown = document.getElementById("Show");
const Opperations = ["*","+","/","-","="];
var randnum = 0;

function Next(){
    if(FirstContinue == false)
    {
        if(FirstSkipped == false)
        {
            FirstNumber = Math.floor(Math.random() * 10);
            document.getElementById("Show") = FirstNumber;
        }
    }
    
    if(FirstSkipped == true)
    {
        SecondNumber = Math.floor(Math.random() * 10);
        document.getElementById("Show") = SecondNumber;
    }
    if(FirstContinue == true)
    {
        MyNum = FirstNumber;
        randnum = Math.floor(Math.random() * 5);
        FirstOpperation = Opperations[randnum];
        document.getElementById("Show2") = FirstOpperation;
        if(FirstOpperation == "*")
        {
            MyNum * 
        }
    }

}

function Skip(){
    if(FirstContinue == true){

    } else if(FirstContinue == false){
        FirstSkipped = true;
        Next();
    }
    
}

function Continue(){
    if(FirstSkipped == true){

    } else if(FirstSkipped == false){
        FirstContinue = true;
        Next();
    }
}