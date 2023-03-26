document.addEventListener("keydown", (e) => {
    var name = e.key;
    if (name === 'a') {
        let s1 = new Audio("sounds/tom-1.mp3");
        s1.play();
    } else if (name === "s") {
        let s2 = new Audio("sounds/tom-2.mp3");
        s2.play();
    } else if (name === "d") {
        let s3 = new Audio("sounds/tom-3.mp3");
        s3.play();
    } else if (name === "f") {
        let s4 = new Audio("sounds/tom-4.mp3");
        s4.play();
    } else if (name === "g") {
        let s5 = new Audio("sounds/snare.mp3");
        s5.play();
    } else if (name === "h") {
        let s7 = new Audio("sounds/kick-bass.mp3");
        s7.play();
    } else if (name === "l") {
        let s6 = new Audio("sounds/crash.mp3");
        s6.play();
    }
})


let drums = document.querySelectorAll('.drum');
drums.forEach((d) => {
    d.addEventListener('click', () => {
        if (d.classList.contains('a')) {
            let s1 = new Audio("sounds/tom-1.mp3");
            s1.play();
        } else if (d.classList.contains('s')) {
            let s2 = new Audio("sounds/tom-2.mp3");
            s2.play();
        } else if (d.classList.contains('d')) {
            let s3 = new Audio("sounds/tom-3.mp3");
            s3.play();
        } else if (d.classList.contains('f')) {
            let s4 = new Audio("sounds/tom-4.mp3");
            s4.play();
        } else if (d.classList.contains('g')) {
            let s5 = new Audio("sounds/snare.mp3");
            s5.play();
        } else if (d.classList.contains('h')) {
            let s6 = new Audio("sounds/crash.mp3");
            s6.play();
        } else if (d.classList.contains('l')) {
            let s7 = new Audio("sounds/kick-bass.mp3");
            s7.play();
        }
    })
})
