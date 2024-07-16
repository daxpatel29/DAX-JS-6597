class NumberManipulator {
  cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }
}

class PalindromeChecker extends NumberManipulator {
  isPalindrome(str) {
    const cStr = this.cleanString(str);
    const revStr = cStr.split("").reverse().join("");
    console.log(revStr);
    return revStr == cStr;
  }
}

function CheckPalindrome() {
  const inpstr = document.getElementById("pal").value;
  const PCheck = new PalindromeChecker();
  let result = "";
  if (PCheck.isPalindrome(inpstr)) {
    result += "Number Is Palindrome";
  } else {
    result += "Number Is Not Palindrome";
  }
  document.getElementById("ans").innerHTML = result;
}
