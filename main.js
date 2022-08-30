const btn = document.querySelector(".btn");
console.log(btn)

btn.addEventListener("click", function(e) {
  const bg = document.querySelector(".generate");
  const i = Math.floor(Math.random()*257);
  const j = Math.floor(Math.random()*257);
  const k = Math.floor(Math.random() * 257);
  bg.style.backgroundColor = `rgb(${i},${j},${k})`;
  
  const crnt = document.querySelector("span");
  console.log(crnt)
})
