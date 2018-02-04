import React, { Component } from 'react';
import './App.css';

class Welcome extends Component{
   
    addValues(){
        var no1= document.getElementById('textbox1');
      var no2=document.getElementById('textbox2');
      var mySum=document.getElementById('mySum');
            var a = getNumberA();
  var b = getNumberB();
   var c = a + b;
  postSumToPage(c);
  function getNumberA() {
  var a  = parseInt(no1.value);
  return a;
}

function getNumberB() {
  var b = parseInt(no2.value);
  return b;
}

function postSumToPage(c) {
  var answer = c.toString();
  mySum.innerHTML = "<h4>SUM:</h4>" + answer;
}

            }
            subtractValues(){
                var no1= document.getElementById('textbox1');
      var no2=document.getElementById('textbox2');
      var myDiff=document.getElementById('myDiff');
            var a = getNumberA();
  var b = getNumberB();
   var d = a - b;
  postDiffToPage(d);
  function getNumberA() {
  var a  = parseInt(no1.value);
  return a;
}

function getNumberB() {
  var b = parseInt(no2.value);
  return b;
}

function postDiffToPage(d) {
  var answer = d.toString();
  myDiff.innerHTML = "<h4>DIFFERENCE:</h4>" + answer;
}

            }
            multiplyValues(){
                   var no1= document.getElementById('textbox1');
      var no2=document.getElementById('textbox2');
      var myProd=document.getElementById('myProd');
            var a = getNumberA();
  var b = getNumberB();
   var c = a*b;
  postProdToPage(c);
  function getNumberA() {
  var a  = parseInt(no1.value);
  return a;
}

function getNumberB() {
  var b = parseInt(no2.value);
  return b;
}

function postProdToPage(c) {
  var answer = c.toString();
  myProd.innerHTML = "<h4>MULTIPLY:</h4>" + answer;
}

            }
            divideValues(){
                          var no1= document.getElementById('textbox1');
      var no2=document.getElementById('textbox2');
      var myDiv=document.getElementById('myDiv');
            var a = getNumberA();
  var b = getNumberB();
   var c = a/b;
  postDivToPage(c);
  function getNumberA() {
  var a  = parseInt(no1.value);
  return a;
}

function getNumberB() {
  var b = parseInt(no2.value);
  return b;
}

function postDivToPage(c) {
  var answer = c.toString();
  myDiv.innerHTML = "<h4>DIVISION:</h4>" + answer;
}
            }
             resetValues(){
                 var mySum=document.getElementById('mySum');
                 var myDiff=document.getElementById('myDiff');
                 var myProd=document.getElementById('myProd');
                 var myDiv=document.getElementById('myDiv');
                          
       var  reset = document.getElementById('reset');
        document.getElementById('textbox1').value="";
        document.getElementById('textbox2').value="";
        mySum.innerHTML = '';
        myDiff.innerHTML='';
        myProd.innerHTML='';
        myDiv.innerHTML='';
    }
    
    render(){
        const name = "Sakshi";
        return (
            
         
    <form className="Calculate">
        <label>
          First Value
          <input type="number" id="textbox1"/>
        </label>
        <br/><br/>
         <label>
             Second Value
          <input type="number" id="textbox2"/>
        </label>
        <br/><br/>
        <div id="answer">
       <div id="mySum">
           </div>
           <div id="myDiff">
               </div>
               <div id="myProd">
                   </div>
                   <div id="myDiv">
                       </div>
           </div>
        
        <br/><br/>
        <input type="button" className="Add-button" value="Add" onClick={(e)=> {e.preventDefault(); this.addValues();}} />
        <input type="button" value="Subtract" onClick={(e)=> {e.preventDefault(); this.subtractValues();}} />
        <input type="button" value="Multiply"onClick={(e)=> {e.preventDefault(); this.multiplyValues();}} />
        <input type="button" value="Divide" onClick={(e)=> {e.preventDefault(); this.divideValues();}}/>
         <input type="reset" value="Reset" id="reset" onClick={(e)=> {e.preventDefault(); this.resetValues();}}/>
        
      </form>

            // <p>Welcome {this.props.name} {name}</p>
        )   
        
    }

}

export default Welcome;