class Fibonacci{
  constructor() {
    if (this.constructor == Sequence) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  getValue(n) {
    throw new Error("Method 'getValue(n)' must be implemented.");
  }
}

class FibonacciSequence extends Sequence {
  getValue(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;

    let a = 0,
      b = 1,
      c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

function getNum() {
  const inpNum = document.getElementById("n").value;
  const fibSeq = new FibonacciSequence();
  const result = fibSeq.getValue(parseInt(inpNum));
  document.getElementById(
    "ans"
  ).innerHTML = `Fibonacci Number At ${inpNum} is ${result}`;
}
