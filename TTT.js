var xoo = document.getElementById("xoo");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var main = document.getElementById("main");
var win = document.getElementById("win");
var body1 = document.getElementById("body1");
var xoo1 = document.getElementById("xoo1");
var xscr = document.getElementById("xscr");
var tscr = document.getElementById("tscr");
var oscr = document.getElementById("oscr");
var wo = document.getElementById("wo");
var chec= document.getElementById("chec");
var checxo=document.getElementById("checxo");
var checf=document.getElementById("checf");
var swi2 = document.getElementById("swi2");
var swio = document.getElementById("swio");
var xy = document.getElementById("xy");
var oy = document.getElementById("oy");
var yo = document.getElementById("yo");
var xscr1 = 0;
var tscr1 = 0;
var oscr1 = 0;
var ran = Math.ceil((Math.random() * 8) - -1);

    /* for choosing of player */
function sswi2(){
 swi2.className="swi2";
 swio.className="";
 checxo.checked=false;
}
function sswio(){
 swi2.className="";
 swio.className="swio";
 swio.style.top="5px";
 checxo.checked=true;
}
/* for choosing ai or friend */
function ai(){
    checf.checked=false;
}
function fri(){
    checf.checked=true;
    pl();
}
function pl(){
  xscr1=0;
  xscr.innerText=0;
  tscr1=0;
  tscr.innerText=0;
  oscr1=0;
  oscr.innerText=0; b1.innerText="";b2.innerText="";b3.innerText="";b4.innerText="";b5.innerText="";b6.innerText="";b7.innerText="";b8.innerText="";b9.innerText="";
  if(checxo.checked==true && checf.checked==true){
  xy.innerText="FRIEND";oy.innerText="YOU"}
  else if(checxo.checked==false && checf.checked==true){
   xy.innerText="YOU";oy.innerText="FRIEND"}
  if(checxo.checked==true && checf.checked==false){
  xy.innerText="AI";oy.innerText="YOU";
  b1.innerText="x";chec.checked=true;xoo.innerText="o"}
  else if(checxo.checked==false && checf.checked==false){
   xy.innerText="YOU";oy.innerText="AI"}
   
  body1.style.display="none";
  main.style.display="block";
}
function rel(){
    body1.style.display="block";
    main.style.display="none";
    sswi2();
    checf.checked=false;
    chec.checked=false;
    xoo.innerText="x";
}
function addx(){
/* Algorithm for the AI*/
/* Algorithm for AI x */
if(checf.checked==false && checxo.checked==true){
xoo.innerText="o"; if(b1.innerText=="x"&&b2.innerText=="x"&&b3.innerText.length<1){b3.innerText="x"}
else if (b1.innerText=="x"&&b4.innerText=="x"&&b7.innerText.length<1){b7.innerText="x"}
else if (b1.innerText=="x"&&b5.innerText=="x"&&b9.innerText.length<1){b9.innerText="x"}
else if (b2.innerText=="x"&&b5.innerText=="x"&&b8.innerText.length<1){b8.innerText="x"}
else if (b3.innerText=="x"&&b6.innerText=="x"&&b9.innerText.length<1){b9.innerText="x"}
else if (b6.innerText=="x"&&b5.innerText=="x"&&b4.innerText.length<1){b4.innerText="x"}
else if (b7.innerText=="x"&&b5.innerText=="x"&&b3.innerText.length<1){b3.innerText="x"}
else if (b7.innerText=="x"&&b8.innerText=="x"&&b9.innerText.length<1){b9.innerText="x"}
else if(b1.innerText=="x"&&b2.innerText.length<1&&b3.innerText=="x"){b2.innerText="x"}
else if (b1.innerText=="x"&&b4.innerText.length<1&&b7.innerText=="x"){b4.innerText="x"}
else if (b1.innerText=="x"&&b5.innerText.length<1&&b9.innerText=="x"){b5.innerText="x"}
else if (b2.innerText=="x"&&b5.innerText.length<1&&b8.innerText=="x"){b5.innerText="x"}
else if (b3.innerText=="x"&&b6.innerText.length<1&&b9.innerText=="x"){b6.innerText="x"}
else if (b6.innerText=="x"&&b5.innerText.length<1&&b4.innerText=="x"){b5.innerText="x"}
else if (b7.innerText=="x"&&b5.innerText.length<1&&b3.innerText=="x"){b5.innerText="x"}
else if (b7.innerText=="x"&&b8.innerText.length<1&&b9.innerText=="x"){b8.innerText="x"}
else if(b1.innerText.length<1&&b2.innerText=="x"&&b3.innerText=="x"){b1.innerText="x"}
else if (b1.innerText.length<1&&b4.innerText=="x"&&b7.innerText=="x"){b1.innerText="x"}
else if (b1.innerText.length<1&&b5.innerText=="x"&&b9.innerText=="x"){b1.innerText="x"}
else if (b2.innerText.length<1&&b5.innerText=="x"&&b8.innerText=="x"){b2.innerText="x"}
else if (b3.innerText.length<1&&b6.innerText=="x"&&b9.innerText=="x"){b3.innerText="x"}
else if (b6.innerText.length<1&&b5.innerText=="x"&&b4.innerText=="x"){b6.innerText="x"}
else if (b7.innerText.length<1&&b5.innerText=="x"&&b3.innerText=="x"){b7.innerText="x"}
else if (b7.innerText.length<1&&b8.innerText=="x"&&b9.innerText=="x"){b7.innerText="x"}
else if(b1.innerText=="o"&&b2.innerText=="o"&&b3.innerText.length<1){b3.innerText="x"}
else if (b1.innerText=="o"&&b4.innerText=="o"&& b7.innerText.length<1){b7.innerText="x"}
else if (b1.innerText=="o"&&b5.innerText=="o"&&b9.innerText.length<1){b9.innerText="x"}
else if (b2.innerText=="o"&&b5.innerText=="o"&& b8.innerText.length<1){b8.innerText="x"}
else if (b3.innerText=="o"&&b6.innerText=="o"&& b9.innerText.length<1){b9.innerText="x"}
else if (b6.innerText=="o"&&b5.innerText=="o"&& b4.innerText.length<1){b4.innerText="x"}
else if (b7.innerText=="o"&&b5.innerText=="o"&& b3.innerText.length<1){b3.innerText="x"}
else if (b7.innerText=="o"&&b8.innerText=="o"&& b9.innerText.length<1){b9.innerText="x"}
else if(b1.innerText=="o"&&b2.innerText.length<1&&b3.innerText=="o"){b2.innerText="x"}
else if (b1.innerText=="o"&&b4.innerText.length<1&&b7.innerText=="o"){b4.innerText="x"}
else if (b1.innerText=="o"&&b5.innerText.length<1&&b9.innerText=="o"){b5.innerText="x"}
else if (b2.innerText=="o"&&b5.innerText.length<1&&b8.innerText=="o"){b5.innerText="x"}
else if (b3.innerText=="o"&&b6.innerText.length<1&&b9.innerText=="o"){b6.innerText="x"}
else if (b6.innerText=="o"&&b5.innerText.length<1&&b4.innerText=="o"){b5.innerText="x"}
else if (b7.innerText=="o"&&b5.innerText.length<1&&b3.innerText=="o"){b5.innerText="x"}
else if (b7.innerText=="o"&&b8.innerText.length<1&&b9.innerText=="o"){b8.innerText="x"}
else if (b1.innerText.length<1&&b2.innerText=="o"&&b3.innerText=="o"){b1.innerText="x"} 
else if (b1.innerText.length<1&&b4.innerText=="o"&&b7.innerText=="o"){b1.innerText="x"}
else if (b1.innerText.length<1&&b5.innerText=="o"&&b9.innerText=="o"){b1.innerText="x"}
else if (b2.innerText.length<1&&b5.innerText=="o"&&b8.innerText=="o"){b2.innerText="x"}
else if (b3.innerText.length<1&&b6.innerText=="o"&&b9.innerText=="o"){b3.innerText="x"}
else if (b6.innerText.length<1&&b5.innerText=="o"&&b4.innerText=="o"){b6.innerText="x"}
else if (b7.innerText.length<1&&b5.innerText=="o"&&b3.innerText=="o"){b7.innerText="x"}
else if(b1.innerText=="x" && b5.innerText=="o"&& b9.innerText.length<1){b9.innerText="x"}
else if (b7.innerText.length<1&&b8.innerText=="o"&&b9.innerText=="o"&& b7.innerText.length<1){b7.innerText="x"}
else if (b5.innerText=="o"&& b7.innerText=="x"&& b3.innerText=="o"&& b1.innerText=="o"&& b4.innerText.length<1){b4.innerText="x"}
else if(b5.innerText=="o"&& b7.innerText=="x"&& b9.innerText.length<1){b9.innerText="x"}
else if(b5.innerText=="o"&& b7.innerText.length<1){b7.innerText="x"}
else if(b1.innerText=="x"&& b3.innerText=="o"&& b9.innerText.length<1){b9.innerText="x"}
else if(b1.innerText=="x"&& b7.innerText=="o"&& b9.innerText.length<1){b9.innerText="x"}
else if(b1.innerText=="x"&& b9.innerText=="o"&& b5.innerText.length<1){b5.innerText="x"}
else if(b5.innerText.length<1){b5.innerText="x"}
else if(b8.innerText.length<1){b8.innerText="x"}
else if(b3.innerText.length<1){b3.innerText="x"}
else if(b2.innerText.length<1){b2.innerText="x"}
else if(b6.innerText.length<1){b6.innerText="x"}
else if(b7.innerText.length<1){b7.innerText="x"}
else if(b4.innerText.length<1){b4.innerText="x"}
else if(b1.innerText.length<1){b1.innerText="x"}
else if(b9.innerText.lengt=h<1){b9.innerText="x"}
}
/*Algorithm for o AI*/
else if(checf.checked==false && checxo.checked==false){
xoo.innerText="x"; if(b1.innerText=="o"&&b2.innerText=="o"&&b3.innerText.length<1){b3.innerText="o"}
else if (b1.innerText=="o"&&b4.innerText=="o"&&b7.innerText.length<1){b7.innerText="o"}
else if (b1.innerText=="o"&&b5.innerText=="o"&&b9.innerText.length<1){b9.innerText="o"}
else if (b2.innerText=="o"&&b5.innerText=="o"&&b8.innerText.length<1){b8.innerText="o"}
else if (b3.innerText=="o"&&b6.innerText=="o"&&b9.innerText.length<1){b9.innerText="o"}
else if (b6.innerText=="o"&&b5.innerText=="o"&&b4.innerText.length<1){b4.innerText="o"}
else if (b7.innerText=="o"&&b5.innerText=="o"&&b3.innerText.length<1){b3.innerText="o"}
else if (b7.innerText=="o"&&b8.innerText=="o"&&b9.innerText.length<1){b9.innerText="o"}
else if(b1.innerText=="o"&&b2.innerText.length<1&&b3.innerText=="o"){b2.innerText="o"}
else if (b1.innerText=="o"&&b4.innerText.length<1&&b7.innerText=="o"){b4.innerText="o"}
else if (b1.innerText=="o"&&b5.innerText.length<1&&b9.innerText=="o"){b5.innerText="o"}
else if (b2.innerText=="o"&&b5.innerText.length<1&&b8.innerText=="o"){b5.innerText="o"}
else if (b3.innerText=="o"&&b6.innerText.length<1&&b9.innerText=="o"){b6.innerText="o"}
else if (b6.innerText=="o"&&b5.innerText.length<1&&b4.innerText=="o"){b5.innerText="o"}
else if (b7.innerText=="o"&&b5.innerText.length<1&&b3.innerText=="o"){b5.innerText="o"}
else if (b7.innerText=="o"&&b8.innerText.length<1&&b9.innerText=="o"){b8.innerText="o"}
else if(b1.innerText.length<1&&b2.innerText=="o"&&b3.innerText=="o"){b1.innerText="o"}
else if (b1.innerText.length<1&&b4.innerText=="o"&&b7.innerText=="o"){b1.innerText="o"}
else if (b1.innerText.length<1&&b5.innerText=="o"&&b9.innerText=="o"){b1.innerText="o"}
else if (b2.innerText.length<1&&b5.innerText=="o"&&b8.innerText=="o"){b2.innerText="o"}
else if (b3.innerText.length<1&&b6.innerText=="o"&&b9.innerText=="o"){b3.innerText="o"}
else if (b6.innerText.length<1&&b5.innerText=="o"&&b4.innerText=="o"){b6.innerText="o"}
else if (b7.innerText.length<1&&b5.innerText=="o"&&b3.innerText=="o"){b7.innerText="o"}
else if (b7.innerText.length<1&&b8.innerText=="o"&&b9.innerText=="o"){b7.innerText="o"}
else if(b1.innerText=="x"&&b2.innerText=="x"&&b3.innerText.length<1){b3.innerText="o"}
else if (b1.innerText=="x"&&b4.innerText=="x"&& b7.innerText.length<1){b7.innerText="o"}
else if (b1.innerText=="x"&&b5.innerText=="x"&&b9.innerText.length<1){b9.innerText="o"}
else if (b2.innerText=="x"&&b5.innerText=="x"&& b8.innerText.length<1){b8.innerText="o"}
else if (b3.innerText=="x"&&b6.innerText=="x"&& b9.innerText.length<1){b9.innerText="o"}
else if (b6.innerText=="x"&&b5.innerText=="x"&& b4.innerText.length<1){b4.innerText="o"}
else if (b7.innerText=="x"&&b5.innerText=="x"&& b3.innerText.length<1){b3.innerText="o"}
else if (b7.innerText=="x"&&b8.innerText=="x"&& b9.innerText.length<1){b9.innerText="o"}
else if(b1.innerText=="x"&&b2.innerText.length<1&&b3.innerText=="x"){b2.innerText="o"}
else if (b1.innerText=="x"&&b4.innerText.length<1&&b7.innerText=="x"){b4.innerText="o"}
else if (b1.innerText=="x"&&b5.innerText.length<1&&b9.innerText=="x"){b5.innerText="o"}
else if (b2.innerText=="x"&&b5.innerText.length<1&&b8.innerText=="x"){b5.innerText="o"}
else if (b3.innerText=="x"&&b6.innerText.length<1&&b9.innerText=="x"){b6.innerText="o"}
else if (b6.innerText=="x"&&b5.innerText.length<1&&b4.innerText=="x"){b5.innerText="o"}
else if (b7.innerText=="x"&&b5.innerText.length<1&&b3.innerText=="x"){b5.innerText="o"}
else if (b7.innerText=="x"&&b8.innerText.length<1&&b9.innerText=="x"){b8.innerText="o"}
else if (b1.innerText.length<1&&b2.innerText=="x"&&b3.innerText=="x"){b1.innerText="o"} 
else if (b1.innerText.length<1&&b4.innerText=="x"&&b7.innerText=="x"){b1.innerText="o"}
else if (b1.innerText.length<1&&b5.innerText=="x"&&b9.innerText=="x"){b1.innerText="o"}
else if (b2.innerText.length<1&&b5.innerText=="x"&&b8.innerText=="x"){b2.innerText="o"}
else if (b3.innerText.length<1&&b6.innerText=="x"&&b9.innerText=="x"){b3.innerText="o"}
else if (b6.innerText.length<1&&b5.innerText=="x"&&b4.innerText=="x"){b6.innerText="o"}
else if (b7.innerText.length<1&&b5.innerText=="x"&&b3.innerText=="x"){b7.innerText="o"}
else if (b7.innerText.length<1&&b8.innerText=="x"&&b9.innerText=="x"){b7.innerText="o"}
else if(b1.innerText=="o"&& b5.innerText=="x"&& b9.innerText.length<1){b9.innerText="o"}
else if (b5.innerText=="x"&& b7.innerText=="o"&& b3.innerText=="x"&& b1.innerText=="x"&& b4.innerText.length<1){b4.innerText="o"}
else if(b5.innerText=="x"&& b7.innerText=="o"&& b9.innerText.length<1){b9.innerText="o"}
else if(b5.innerText=="x"&& b7.innerText.length<1){b7.innerText="o"}
else if(b1.innerText=="o"&& b3.innerText=="x"&& b9.innerText.length<1){b9.innerText="o"}
else if(b1.innerText=="o"&& b7.innerText=="x"&& b9.innerText.length<1){b9.innerText="o"}
else if(b1.innerText=="o"&& b9.innerText=="x"&& b5.innerText<1){b5.innerText="o"}
else if(b5.innerText.length<1){b5.innerText="o"}
else if(b8.innerText.length<1){b8.innerText="o"}
else if(b3.innerText.length<1){b3.innerText="o"}
else if(b2.innerText.length<1){b2.innerText="o"}
else if(b9.innerText.length<1){b9.innerText="o"}
else if(b7.innerText.length<1){b7.innerText="o"}
else if(b4.innerText.length<1){b4.innerText="o"}
else if(b1.innerText.length<1){b1.innerText="o"}
else if(b6.innerText.length<1){b6.innerText="o"}
}
/* Algorithm ends here */
setTimeout(function(){
  /* for Draw */
if(b1.innerText.length == 1 &&                                  b2.innerText.length==1 && b3.innerText.length==1 && b4.innerText.length==1 && b5.innerText.length==1 && b6.innerText.length==1 && b7.innerText.length==1 && b8.innerText.length==1 && b9.innerText.length==1){
 main.style.filter="blur(5px)";
 win.style.display="block";
 wo.innerText="DRAW";
 yo.innerText="YOU";
 tscr1 = tscr1 - -1;
 tscr.innerText = tscr1;
 if (win.style.display=="block"&& chec.checked==false){xoo1.innerText="o";xoo.innerText="o"}
 else if(win.style.display=="block"&& chec.checked==true){xoo1.innerText="x";xoo.innerText="x"}

}

    if(wo.innerText=="WON"){
    xscr1 = xscr1 - -1;
    xscr.innerText = xscr1;}
    
    if(wo.innerText=="LOSE"){
        oscr1 = oscr1 - -1;
        oscr.innerText = oscr1;
    }
},50)}

setInterval(function(){
/* for x win */
if ((b1.innerText=="x"&&b2.innerText=="x"&&b3.innerText=="x") || (b1.innerText=="x"&&b4.innerText=="x"&&b7.innerText=="x") || (b1.innerText=="x"&&b5.innerText=="x"&&b9.innerText=="x") || (b2.innerText=="x"&&b5.innerText=="x"&&b8.innerText=="x") || (b3.innerText=="x"&&b6.innerText=="x"&&b9.innerText=="x") || (b6.innerText=="x"&&b5.innerText=="x"&&b4.innerText=="x") || (b7.innerText=="x"&&b5.innerText=="x"&&b3.innerText=="x") || (b7.innerText=="x"&&b8.innerText=="x"&&b9.innerText=="x")){
 main.style.filter="blur(5px)";
 win.style.display="block";
 wo.innerText="WON";
 yo.innerText=xy.innerText;
 if (win.style.display=="block"&& chec.checked==false){xoo1.innerText="o";xoo.innerText="o"}
 else if(win.style.display=="block"&& chec.checked==true){xoo1.innerText="x";xoo.innerText="x"}
 }
/* for o win */
if ((b1.innerText=="o"&&b2.innerText=="o"&&b3.innerText=="o") || (b1.innerText=="o"&&b4.innerText=="o"&&b7.innerText=="o") || (b1.innerText=="o"&&b5.innerText=="o"&&b9.innerText=="o") || (b2.innerText=="o"&&b5.innerText=="o"&&b8.innerText=="o") || (b3.innerText=="o"&&b6.innerText=="o"&&b9.innerText=="o") || (b6.innerText=="o"&&b5.innerText=="o"&&b4.innerText=="o") || (b7.innerText=="o"&&b5.innerText=="o"&&b3.innerText=="o") || (b7.innerText=="o"&&b8.innerText=="o"&&b9.innerText=="o")){
 main.style.filter="blur(5px)";
 win.style.display="block";
 wo.innerText="LOSE";
 yo.innerText=xy.innerText;
 if (win.style.display=="block"&& chec.checked==false){xoo1.innerText="o";xoo.innerText="o"}
 else if(win.style.display=="block"&& chec.checked==true){xoo1.innerText="x";xoo.innerText="x"}

}
/* for color change*/
if(b1.innerText=="o"){b1.style.color="orange"}
if(b2.innerText=="o"){b2.style.color="orange"}
if(b3.innerText=="o"){b3.style.color="orange"}
if(b4.innerText=="o"){b4.style.color="orange"}
if(b5.innerText=="o"){b5.style.color="orange"}
if(b6.innerText=="o"){b6.style.color="orange"}
if(b7.innerText=="o"){b7.style.color="orange"}
if(b8.innerText=="o"){b8.style.color="orange"}
if(b9.innerText=="o"){b9.style.color="orange"}
/* for color change x */
if(b1.innerText=="x"){b1.style.color="teal"}
if(b2.innerText=="x"){b2.style.color="teal"}
if(b3.innerText=="x"){b3.style.color="teal"}
if(b4.innerText=="x"){b4.style.color="teal"}
if(b5.innerText=="x"){b5.style.color="teal"}
if(b6.innerText=="x"){b6.style.color="teal"}
if(b7.innerText=="x"){b7.style.color="teal"}
if(b8.innerText=="x"){b8.style.color="teal"}
if(b9.innerText=="x"){b9.style.color="teal"}
},50)
function ner(){
main.style.filter="blur(0px)";
win.style.display="none";
b1.innerText="";b2.innerText="";b3.innerText="";b4.innerText="";b5.innerText="";b6.innerText="";b7.innerText="";b8.innerText="";b9.innerText="";xoo1.innerText="";wo.innerText="";yo.innerText="";
if(chec.checked==false){chec.checked=true}
else /*if(chec.checked==true)*/{chec.checked=false}
if(checf.checked==false && checxo.checked==false && chec.checked==true){xoo.innerText="x";b1.innerText="o"}
if(chec.checked==false && checf.checked==false && checxo.checked==true){xoo.innerText="o";b1.innerText="x"}
}
function xo1(){
if (b1.innerText.length < 1 ){xo()}
}
function xo2(){
if (b2.innerText.length < 1 ){xo()}
}
function xo3(){
if (b3.innerText.length < 1 ){xo()}
}
function xo4(){
if (b4.innerText.length < 1 ){xo()}
}
function xo5(){
if (b5.innerText.length < 1 ){xo()}
}
function xo6(){
if (b6.innerText.length < 1 ){xo()}
}
function xo7(){
if (b7.innerText.length < 1 ){xo()}
}
function xo8(){
if (b8.innerText.length < 1 ){xo()}
}
function xo9(){
if (b9.innerText.length < 1 ){xo()}
}
function xo(){
if (xoo.innerText=="x"){xoo.innerText="o"}
else if(xoo.innerText=="o"){xoo.innerText="x"}
}
function bb1(){
if (b1.innerText.length < 1 ){
if (xoo.innerText=="x"){b1.innerText="o";b1.style.color="orange"}
else if(xoo.innerText=="o"){b1.innerText="x";b1.style.color="teal";}
}}
function bb2(){
if (b2.innerText.length < 1 ){
if (xoo.innerText=="x"){b2.innerText="o";b2.style.color="orange"}
else if(xoo.innerText=="o"){b2.innerText="x";b2.style.color="teal";}
}}
function bb3(){
if (b3.innerText.length < 1 ){
if (xoo.innerText=="x"){b3.innerText="o";b3.style.color="orange"}
else if(xoo.innerText=="o"){b3.innerText="x";b3.style.color="teal";}
}}
function bb4(){
if (b4.innerText.length < 1 ){
if (xoo.innerText=="x"){b4.innerText="o";b4.style.color="orange"}
else if(xoo.innerText=="o"){b4.innerText="x";b4.style.color="teal";}
}}
function bb5(){
if (b5.innerText.length < 1 ){
if (xoo.innerText=="x"){b5.innerText="o";b5.style.color="orange"}
else if(xoo.innerText=="o"){b5.innerText="x";b5.style.color="teal";}
}}
function bb6(){
if (b6.innerText.length < 1 ){
if (xoo.innerText=="x"){b6.innerText="o";b6.style.color="orange"}
else if(xoo.innerText=="o"){b6.innerText="x";b6.style.color="teal";}
}}
function bb7(){
if (b7.innerText.length < 1 ){
if (xoo.innerText=="x"){b7.innerText="o";b7.style.color="orange"}
else if(xoo.innerText=="o"){b7.innerText="x";b7.style.color="teal";}
}}
function bb8(){
if (b8.innerText.length < 1 ){
if (xoo.innerText=="x"){b8.innerText="o";b8.style.color="orange"}
else if(xoo.innerText=="o"){b8.innerText="x";b8.style.color="teal";}
}}
function bb9(){
if (b9.innerText.length < 1 ){
if (xoo.innerText=="x"){b9.innerText="o";b9.style.color="orange"}
else if(xoo.innerText=="o"){b9.innerText="x";b9.style.color="teal";}
}}
