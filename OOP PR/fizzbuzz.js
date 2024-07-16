class FizzBuzz {
  print() {
    let a = "";
    for (let i = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        n += "FizzBuzz\n";
      } else if (i % 5 == 0) {
        a += "Buzz\n";
      } else if (i % 3 == 0) {
        a += "Fizz\n";
      } else {
        a += i + "\n";
      }
    }
    console.log(a);
  }
}

let numbers = new FizzBuzz();
numbers.print();
