let quotes = [
  {
    text: "Life is either a daring adventure or nothing."
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on."
  },
  {
    text: "Life is made of ever so many partings welded together."
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
