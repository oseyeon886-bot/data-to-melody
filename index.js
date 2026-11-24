const input1=document.getElementById("input1");
const button1=document.getElementById("button1");
const p1=document.getElementById("p1");

button1.onclick = () =>{
   const text= input1.value;

    if(text.includes("좋은")) {
        p1.textContent = "Day 1 - redvelvet, Cherish - illit";
    }
    else if(text.includes("나쁜")) {
        p1.textContent = "Fake Rock Star - swings, 범퍼카 - 한요한";
    }
}