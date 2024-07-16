let photo = 0;

function change(n) {
  photo = photo + n;
  Slider(flag);
}

Slider(photo);

function Slider(num) {
  let slider = document.getElementsByClassName("slide");

  if (num == slider.length) {
    photo = 0;
    num = 0;
  } else if (num < 0) {
    photo = slider.length - 1;
    num = slider.length - 1;
  }

  for (let x of slider) {
    x.style.display = "none";
  }

  slider[num].style.display = "block";
}