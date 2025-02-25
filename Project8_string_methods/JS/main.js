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
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }

//String Number Method//

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}