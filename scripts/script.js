"use strict";

const select = document.querySelector("#genres");
for (const option of select.options) {
  if (option.selected) {
    alert(option.text);
  }
}

const newOption = new Option("Classic", "classic", true, true);
select.add(newOption);

for (const option of select.options) {
  console.log(option);
}
