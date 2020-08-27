const { lowercase, uppercase, titlecase } = require("./module/converters");

const string = "Once TDM WAS played by THe";

function emit(string) {
  console.log(lowercase(string));
  console.log(uppercase(string));
  console.log(titlecase(string));
}

emit(string);
