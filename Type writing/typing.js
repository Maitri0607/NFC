const text = "This is a sample text. Each line will be typed one by one.";

let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById('typing').innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

type();
