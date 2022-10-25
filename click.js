function myfunction(){

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    // document.getElementById("body").style.backgroundColor = "red";
    document.body.style.backgroundColor = bgColor;
// document.getElementById("click").style.backgroundColor = "red";
}
