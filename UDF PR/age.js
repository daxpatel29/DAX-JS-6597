function age() {
  let day = parseInt(document.getElementById("d1").value);
  let month = parseInt(document.getElementById("m1").value);
  let year = parseInt(document.getElementById("y1").value);
  let day1 = parseInt(document.getElementById("d2").value);
  let month1 = parseInt(document.getElementById("m2").value);
  let year1 = parseInt(document.getElementById("y2").value);

  let d2, m2, y2, d1, m1, y1;
  y1 = year1 - year;
  m1 = month1 - month;
  d1 = day1 - day;
  m2 = month - month1;
  d2 = day - day1;
  if (day1 >= day2) {
    d1 = 30 + d1;
  }
  if (day1 >= day2 && month1 == month2) {
    m1 = m1 - 1;
    y1 = y1 - 1;
  }
  if (month1 > month2) {
    m1 = 12 + m1;
    y1 = y1 - 1;
  }
  if (month1 == month2) {
    y2 = 0;
    m1 = m1 + 12;
    m2 = 0;
  }
  if (day1 <= day2) {
    d2 = 30 + d2;
    m2 = m2 - 1;
  }

  if (month1 < month2 && day1 < day2) {
    m2 = m2 + 12;
  }
  if (month1 == month2 && day1 < day2) {
    m1 = 0;
    m2 = 11;
  }

  if (month1 == month2 && day1 == day2 && year1 == year2) {
    m1 = 0;
    m2 = 0;
    d1 = 0;
    d2 = 0;
    y1 = 0;
    y2 = 0;
  }
  document.getElementById("age").innerHTML =
      y1 + " Years " + m1 + " Months " + d1 + " Days Old";
  document.getElementById("bday").innerHTML =
    " Next Birthday Will Be After " + m2 + " Months " + d2 + " Days ";
}
