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
}