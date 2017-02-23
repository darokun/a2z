// var txt;

function loadFile() {
  loadStrings("rainbow.txt", fileLoaded);
}

function fileLoaded(data) {
  // txt = data;
  createP(join(data, "<br/>"));
}

function fileSelected(file) {
  createP(file.name + " " + file.size + " " + file.type);

  if (file.type == "text") {
      createP(file.data);
  } else {
      createP("ERROR: I need a text file.");
  }
  // console.log(file);
}


function setup() {
  noCanvas();

  var button = select("#loadfile");
  button.mousePressed(loadFile);

  createFileInput(fileSelected);

  // console.log(txt);
}

function draw() {

}
