
function determineHeightAndThenDrawPyramid() {
  printPyramid(document.getElementById("height").value);
}
printPyramid(1)
function printPyramid(rows) {
  document.getElementById("pyramid").innerHTML = "";
  let brk = document.getElementById("brick").value
  let strt = brk + brk;
  let space = " ";
  for (let k = 0; k < rows; k++) {
    space += " ";
  }
  str = space + strt;
  for (let i = 0; i < rows; i++) {
    console.log(str);
    document.getElementById("pyramid").innerHTML += "<p>" + str + "</p>";
    str = str.substring(1);
    str = str + brk;
  }
}