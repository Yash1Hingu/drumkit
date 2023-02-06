document.addEventListener("keydown",(e)=>{
    var name = e.key;
    console.log(name);
    if(name === 'a') {
        var s1 = new Audio("sounds/tom-1.mp3");
        s1.play();
    } else if(name === "s") {
        var s2 = new Audio("sounds/tom-2.mp3");
        s2.play();
    } else if(name === "d") {
        var s3 = new Audio("sounds/tom-3.mp3");
        s3.play();
    } else if(name === "f") {
        var s4 = new Audio("sounds/tom-4.mp3");
        s4.play();
    } else if(name === "g") {
        var s5 = new Audio("sounds/snare.mp3");
        s5.play();
    } else if(name === "h") {
        s2 = new Audio("sounds/kick-bass.mp3");
        s2.play();
    } else if(name === "l") {
        var s2 = new Audio("sounds/crash.mp3");
        s2.play();
    }
})
