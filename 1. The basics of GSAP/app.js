/* 
    ? o to serve como um para, como o objeto estará, basicamente o objeto é criado e depois o to o anima

    ? o from serve como um de, como o objeto estará antes de ser "criado" e posicionado em seu devido lugar, como ele estará antes de 
    ? posicionado

    * é possível também atribuir efeitos de css depois das condições
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
