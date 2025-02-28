//Concatenate Combine Sentence//

function full_Sentence() {
    var part_1 =" This is ";
    var part_2 =" All About ";
    var part_3 =" Learning How ";
    var part_4 =" To Create ";
    var part_5 =" Full Sentences";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice Method//

function slice_Method() {
    var Sentence = "All work and no play makes Jack a Dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//ToUppercCase Method//

function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
    text.toUpperCase();
  }

//String Number Method//

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//Precision Method//

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//Fixed Method//
function toFixed_Method() {
let num = 5.56789;
let n = num.toFixed(3);

document.getElementById("test").innerHTML = n;
}

//Value Method//

let text = "Hello World!";
let result = text.valueOf();

document.getElementById("demo").innerHTML = result;
