// copy
function copyToClipboard() {
  var from = document.getElementById("paragraph");
  var range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(from);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  const button = document.getElementById("copy");
  button.innerHTML = "copied!!";
}

// font size
function fontSize(value) {
  let paragraph = document.getElementById("paragraph");
  let style = window
    .getComputedStyle(paragraph, null)
    .getPropertyValue("font-size");
  var fontSize = parseFloat(style);

  console.log(fontSize);
  fontSize = fontSize + value + "px";
  paragraph.style.fontSize = fontSize;
  paragraph.style.lineHeight = fontSize;
}

// convert paragraph

function uppercase() {
  let paragraph = document.getElementById("paragraph");
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}

function lowercase() {
  let paragraph = document.getElementById("paragraph");
  paragraph.innerHTML = paragraph.innerHTML.toLowerCase();
  return paragraph.innerHTML;
}

function titlecase() {
  let paragraph = document.getElementById("paragraph");
  paragraph.innerHTML = lowercase();
  let words = paragraph.innerHTML.split(" ");
  let filtered = [];

  for (let word of words) {
    filtered.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  let titlecase = filtered.join(" ");
  paragraph.innerHTML = titlecase;
}
