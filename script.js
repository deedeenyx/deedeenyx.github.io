document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  function createPetal() {
    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 3 +2 + "s";
    body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 5000);
  }

  setInterval(createPetal, 300);
});
  
