// const startBtn = document.getElementById("startBtn");
// const left = document.getElementById("left");
// const right = document.getElementById("right");

function start() {
    startBtn.style.display = "none";

    left.classList.add("open");
    right.classList.add("open");
    setTimeout(()=>{
    year.classList.add('show');
    }, 1000);
     setTimeout(()=>{
    truck.classList.add('move');
    }, 2000);
   setTimeout(()=>{
    missile.classList.add('launch');
   }, 5000);
    setTimeout(()=>{
    bomb.classList.add('explode');
   }, 9000);
    setTimeout(()=>{
    bomb.classList.add('explode');
    missile.style.display = "none";
    lastSpan.style.display = "none";
    truck.classList.remove("move");
    truck.classList.add("restart");
    flight.classList.add("move");
   }, 10500);
   setTimeout(()=>{
    newSpan.classList.add('drop')
   }, 13500)
    setTimeout(()=>{
    year.classList.add('color');
    newSpan.classList.add('color')
    message.classList.add('greet');
   }, 15500)
}