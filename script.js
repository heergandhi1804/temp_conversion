// Temp conversion program

const textbox = document.getElementById("textbox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const res = document.getElementById("res");
const mybutton = document.getElementById("mybutton");
let temp;

mybutton.onclick = function(){
   
    if(toFah.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        res.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCel.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        res.textContent = temp.toFixed(1) + "°C";
    }
    else{
        res.textContent = "Select a unit";
    }
}