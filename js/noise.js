let cNote = document.getElementById('c')
let dNote = document.getElementById('d')
let eNote = document.getElementById('e')
let fNote = document.getElementById('f')
let gNote = document.getElementById('g')
let aNote = document.getElementById('a')
let bNote = document.getElementById('b')
let c2Note = document.getElementById('c2')



cNote.addEventListener('click', (e)=>{
  console.log("You pressed the C note");
  var cPress = new Audio('../sounds/c.flac');
  if(cPress === true);
    cPress.play();
})

dNote.addEventListener('click', (e)=>{
  console.log("You pressed the D note");
  var dPress = new Audio('../sounds/d.flac');
  if(dPress === true);
    dPress.play();
})

eNote.addEventListener('click', (e)=>{
  console.log("You pressed the E note");
  var ePress = new Audio('../sounds/e.flac');
  if(ePress === true);
    ePress.play();
})

fNote.addEventListener('click', (e)=>{
  console.log("You pressed the F note");
  var fPress = new Audio('../sounds/f.flac');
  if(fPress === true);
    fPress.play();
})

gNote.addEventListener('click', (e)=>{
  console.log("You pressed the G note");
  var gPress = new Audio('../sounds/g.flac');
  if(gPress === true);
    gPress.play();
})

aNote.addEventListener('click', (e)=>{
  console.log("You pressed the A note");
  var aPress = new Audio('../sounds/a.flac');
  if(aPress === true);
    aPress.play();
})

bNote.addEventListener('click', (e)=>{
  console.log("You pressed the B note");
  var bPress = new Audio('../sounds/b.flac');
  if(bPress === true);
    bPress.play();
})

c2Note.addEventListener('click', (e)=>{
  console.log("You pressed the C note");
  var cPress = new Audio('../sounds/c2.flac');
  if(cPress === true);
    cPress.play();
})





window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    var cPress = new Audio('../sounds/c.flac');
    if (e.keyCode == "65") {
        cPress.play()
    }

    var dPress = new Audio('../sounds/d.flac');
    if (e.keyCode == "83") {
        dPress.play()
    }
    var ePress = new Audio('../sounds/e.flac');
    if (e.keyCode == "68") {
        ePress.play()
    }
    var fPress = new Audio('../sounds/f.flac');
    if (e.keyCode == "70") {
        fPress.play()
    }
    var gPress = new Audio('../sounds/g.flac');
    if (e.keyCode == "74") {
        gPress.play()
    }
    var aPress = new Audio('../sounds/a.flac');
    if (e.keyCode == "75") {
        aPress.play()
    }
    var bPress = new Audio('../sounds/b.flac');
    if (e.keyCode == "76") {
        bPress.play()
    }
    var cPress = new Audio('../sounds/c2.flac');
    if (e.keyCode == "186") {
        cPress.play()
    }
}
