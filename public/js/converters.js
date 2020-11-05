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
