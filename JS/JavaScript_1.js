function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// Create Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");

// Fill Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
