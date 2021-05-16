var playerX = 10, playerY = 10;
var CharH = 30, CharW = 30;

var fab = new fabric.Canvas("myCanvas")

var playerOBJ = "", blockOBJ = "";

function addPlayer() {
    fabric.Image.fromURL('player.png', function (Img) {
        playerOBJ = Img;
        playerOBJ.scaleToWidth(150)
        playerOBJ.scaleToHeight(140)
        playerOBJ.set({
            top: playerY,
            left: playerX
        });
        fab.add(playerOBJ)
    })
}
function addChar(getChar) {
    fabric.Image.fromURL(getChar, function (Img) {
        blockOBJ = Img;
        blockOBJ.scaleToWidth(CharW)
        blockOBJ.scaleToHeight(CharH)
        blockOBJ.set({
            top: playerY,
            left: playerX
        });
        fab.add(blockOBJ)
    })
}

window.addEventListener('keydown', mykeypress)

function mykeypress(e) {
    keypressed = e.keyCode;
    if (keypressed == '37') {
        left();
        console.log('left');
    }
    if (keypressed == '38') {
        up();
        console.log('up');
    }
    if (keypressed == '39') {
        right();
        console.log('right');
    }
    if (keypressed == '40') {
        down();
        console.log('down');
    }
    if (keypressed == '70') {
        addChar('images/harry.png')
        console.log("f");
    }
    if (keypressed == '66') {
        addChar('images/colin.png')
        console.log("b");
    }
    if (keypressed == '76') {
        addChar('images/hermonie1.png')
        console.log("l");
    }
    if (keypressed == '82') {
        addChar('images/ron.png')
        console.log("r");
    }
    if (keypressed == '72') {
        addChar('images/draco.png')
        console.log("h");
    }
    if (e.shiftKey == true && keypressed == '80') {
        CharH = CharH + 10; CharW = CharW + 10;
        document.getElementById("width").innerHTML = CharW;
        document.getElementById("height").innerHTML = CharH;
        console.log("Character size increased by shift + p");
    }
    if (e.shiftKey == true && keypressed == '77') {
        CharH = CharH - 10; CharW = CharW - 10;
        document.getElementById("width").innerHTML = CharW;
        document.getElementById("height").innerHTML = CharH;
        console.log("Character size decreased by shift + m");
    }
}

function openprew() {
    window.open("https://drive.google.com/file/d/1TciO3H1re4oEV_xVi1BUM2aacxZ2mV3y/view", '_blank')
}
function opendown() {
    window.open("https://drive.google.com/uc?export=download&id=1TciO3H1re4oEV_xVi1BUM2aacxZ2mV3y", '_blank')
}
function playbg() {
    var audio = new Audio('music.mp3');
  audio.play();
}
