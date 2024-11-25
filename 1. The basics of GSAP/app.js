/* 
    ? o to serve como um para, como o objeto estará, basicamente o objeto é criado e depois o to o anima

    ? o from serve como um de, como o objeto estará antes de ser "criado" e posicionado em seu devido lugar, como ele estará antes de 
    ? posicionado

    * é possível também atribuir efeitos de css depois das condições

    ? propriedade stagger serve para animar elementos filhos qunado mais de um selecionado
*/

const img1 = document.querySelector(".img1");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  /*     gsap.from(img1, {
       autoAlpha: 0,
       duration: 2,
    }) */
  gsap.fromTo(
    img1,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 2,
      rotate: 25,
      ease: "bounce.out",
      //repeat: -1,
      //yoyo: true,
    }
  );
});

/* gsap.to(img1, {
    x: 200,
    y: 300,
    duration: 3,
    backgroundColor: "yellow",
    rotation: 360,
    ease: "elastic.out(1, 0.3)"
}) */

//animando elementos aleatorios

gsap.to(".btn", {
  duration: 0.4,
  stagger: 0.2,
  //x: "random(-100,100)",
  x: "random([20,50,-20, -90, 50])",
  onComplete: () => console.log("COMPLETE"),
  onStart: () => console.log("Start"),
  onRepeat: () => console.log("Repeat"),
});


//serve para fazer com que uma animaçao atue depois da outra em um mesmo obj
gsap.to(img1, {
  keyframes: [
    {duration: 0.3, x: 100},
    {duration: 0.3, y: 100},
    {duration: 0.3, y: -100},
  ]
})