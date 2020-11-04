// convert to uppercase
const uppercase = (paragraph) => {
  return paragraph.toUpperCase();
};

// convert to lowercase
const lowercase = (paragraph) => {
  return paragraph.toLowerCase();
};

// convert to titlecase
const titlecase = (paragraph) => {
  const words = paragraph.split(" ");
  const filtered = [];

  for (let word of words) {
    filtered.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  const titlecase = filtered.join(" ");
  return titlecase;
};

module.exports = { uppercase, lowercase, titlecase };
