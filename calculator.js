//if error, return string error else result number
export function calculate(exp) {
  const tokens = lexer(exp);

  return 0;
}

class Token {
  constructor(kind, value) {
    this.kind = kind;
    this.value = value;
  }
}

function isNumberChar(char) {
  if (
    char == "0" ||
    char == "1" ||
    char == "2" ||
    char == "3" ||
    char == "4" ||
    char == "5" ||
    char == "6" ||
    char == "7" ||
    char == "8" ||
    char == "9"
  ) {
    return true;
  } else {
    return false;
  }
}
function lexer(exp) {
  let tokens = [];

  let x = 0;
  while (x < exp.length) {
    if (exp[x] == " ") {
      //skip whitespace
    } else if (exp[x] == "+") {
      tokens.push(new Token("plus", "+"));
    } else if (exp[x] == "-") {
      tokens.push(new Token("minus", "-"));
    } else if (exp[x] == "*") {
      tokens.push(new Token("multipy", "*"));
    } else if (exp[x] == "/") {
      tokens.push(new Token("divide", "/"));
    } else if (isNumberChar(exp[x])) {
      let num = "";
      let y = x;
      while (y < exp.length && (isNumberChar(exp[y]) || exp[y] == ".")) {
        num += exp[y];
      }

      if (Number.isNaN(num)) {
        tokens.push(new Token("number", Number(num)));
        x = y;
        continue;
      } else {
        return "Invalid input expression 😡";
      }
    }
    x += 1;
  }

  console.log(tokens);

  return tokens;
}


