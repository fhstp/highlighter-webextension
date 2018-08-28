// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

let selection = window.getSelection();

function returnSelection() {
  alert(selection.toString());
  return selection.toString();
}
returnSelection();
