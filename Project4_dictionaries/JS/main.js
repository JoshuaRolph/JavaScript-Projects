function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_audio_Dictionary() {
    var Band = {
        Title: "Killswitch Engage",
        Genre: "Heavy Metal",
        Rating: "Mature",
        Sound: "Screaming"
    };
    document.getElementById("Audio").innerHTML = Band.Genre;
}
document.write("10" + 5);