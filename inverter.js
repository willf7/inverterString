function invertedStr(str) {
  let inverted = " ";

  for (let i = str.length - 1; i >= 0; i--) {
    inverted += str[i];
  }

  return inverted;
}

let userString = prompt("Digite o seu texto para inverter: ");
console.log(invertedStr(userString));
