function counting_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "br" + X;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}