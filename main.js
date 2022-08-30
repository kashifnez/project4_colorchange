const btn = document.querySelector(".btn");
console.log(btn);

const crnt = document.querySelector("span");
  console.log(crnt);
 
const random_color = () => {
    const i = Math.floor(Math.random()*257);
    const j = Math.floor(Math.random()*257);
    const k = Math.floor(Math.random() * 257);
    return `RGB(${i},${j},${k})`;
  };
  
  
btn.addEventListener("click", function(e) {
  
  const bg = document.querySelector(".generate");
  bg.style.backgroundColor = random_color();
  crnt.textContent = random_color();
  
})
