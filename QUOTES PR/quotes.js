let quotes = [
  {
    text: "If you want to shine like a sun, first burn like a sun"
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    text: "First, solve the problem. Then, write the code."
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad."
  },
];

let n = 0;

function showQuote() {
  let quote = document.getElementById("q");
  let auto = document.getElementById("a");
  let timer = document.getElementById("timer");
  let sec = 20;
  function time() {
    timer.innerHTML = sec;
    --sec;
    if (sec == -1) {
      showQuote();
    }
  }
  setInterval(time, 800);
  quote.innerHTML = quotes[n].text;
  auto.innerHTML = quotes[n].Author;
  i++;
  if (n == quotes.length) {
    n = 0;
  }
}

showQuote();
