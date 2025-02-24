function full_Sentence() {
    var part_1 =" This is ";
    var part_2 =" All About ";
    var part_3 =" Learning How ";
    var part_4 =" To Create ";
    var part_5 =" Full Sentences";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}