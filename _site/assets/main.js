// copy to clipboard
function copyClipboard(container) {
  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(container);
    range.select();
    document.execCommand("copy");
  }
  else if(window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(container);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
  }a

alert("fail");
}

// lhost/rhost replacement here
