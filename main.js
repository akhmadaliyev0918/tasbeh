let count = 0;
const res = document.getElementById("res");

function small(num) {
  count = 0;
  res.innerText = count;
}

function big(num) {
  count += 1;
  res.innerText = count;
}