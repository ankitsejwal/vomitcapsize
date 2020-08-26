const uppercase = (paragraph) => {
  return paragraph.toUpperCase();
};

const lowercase = (paragraph) => {
  return paragraph.toLowerCase();
};

const titlecase = (paragraph) => {
  const words = paragraph.split(" ");
  const filtered = [];

  for (let word of words) {
    filtered.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  const titlecase = filtered.join(" ");
  return titlecase;
};

console.log(uppercase("This is the next thinG is the."));
console.log(lowercase("This is the next thinG is the."));
console.log(titlecase("This is the next thinG is the."));
