document.getElementById("load").addEventListener("click", function (event) {
    event.preventDefault();
  
    let city = document.getElementById("inp-city").value;
    let api = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid=7d26a0cebc11dec339c33276d9ed6aa3`;
  
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("res").innerHTML = data.weather[0].main;
  
      });
  });