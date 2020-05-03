function stringParser(input) {
  let res = "<ul>";

  if (input.length % 2 !== 0) {
    input += "_";
  }

  for (let i = 0; i < input.length; i += 2) {
    res += `<li>${input.substring(i, i + 2)}</li>`;
  }
  document.getElementById("resultField").innerHTML = res + "</ul>";
}