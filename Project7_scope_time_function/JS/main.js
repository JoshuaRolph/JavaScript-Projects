function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "Its morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Afternoon";
    }
    else {
        Reply = "Evening Time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//Global Variable//
var A = 3900;

//Local Variable//
function Add_numbers_1() {
    var A = 800;
    document.write(9302 + A + "<br>");
}

function Add_numbers_2() {
    document.write(A + 8); 
    console.log(A);
}

Add_numbers_1();
Add_numbers_2();