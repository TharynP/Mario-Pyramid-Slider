
function determineHeightAndThenDrawPyramid() {
  printPyramid(document.getElementById("height").value);
}

function printPyramid(rows) {
  document.getElementById("pyramid").innerHTML = "";
  let strt = "##";
  let space = " ";
  for (let k = 0; k < rows; k++) {
    space += " ";
  }
  str = space + strt;
  for (let i = 0; i < rows; i++) {
    console.log(str);
    document.getElementById("pyramid").innerHTML += "<p>" + str + "</p>";
    str = str.substring(1);
    str = str + "#";
  }
}