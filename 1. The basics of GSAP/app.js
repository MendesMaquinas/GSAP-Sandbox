/* 
    ? o to serve como um para, como o objeto estará, basicamente o objeto é criado e depois o to o anima

    ? o from serve como um de, como o objeto estará antes de ser "criado" e posicionado em seu devido lugar, como ele estará antes de 
    ? posicionado

    * é possível também atribuir efeitos de css depois das condições
      gsap.set(img1, {opacity:0})


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
    { duration: 0.3, x: 100 },
    { duration: 0.3, y: 100 },
    { duration: 0.3, y: -100 },
  ],
});

//criacao de animacao customizada
gsap.registerEffect({
  name: "imgAnimation",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      y: 200,
      scale: 1.4,
      rotation: 360,
    });
  },
  defaults: {duration: 2}
});

 
//gsap.effects.imgAnimation(img1, {duration: 5})

const TL = gsap.timeline(
  {
    defaults: {
      duration: 1.5,
      ease: "power4.out",
    },
    /*     
    repeat: -1, // repete infinitamente
    yoyo: true, // repete os targets de uma animacao de volta para trás
     */
    onComplete: () => {

    }
  }
);

TL
  .from(".img1", {autoAlpha: 0, y: -50, duration: 1})
  .from(".img2", {autoAlpha: 0, y: -50, duration: 1}, "-=0.75") //ignora as anteriores e iniciara conforme a timeline da timeline
  .from(".img3", {autoAlpha: 0, y: -50, duration: 2}, "+=0.01") //espera anterior mais segundos informados
  .from("h1", {autoAlpha: 0, y: -50, duration: 1}, "<") //no mesmo segundo que a anterior a ela, sem delay
  .add(() => {
    console.log("aa");
  })
  .from("p", {autoAlpha: 0, y: -50, duration: 1, ease: "power4.in"} )

  // normalmente na timeline um elemento isiciará a sua animação depois do outro,
  // quando adiconamos o "-=0.75", ele diz que iniciará no milissegundo informado referente a timeline total da timeline,
  // ignorando o elemento anterior

  /* 
    quando usamos o +=0.75, ele irá seguir a lógica de esperar o elemento anterior, mas adicionará os segundos informados
  */

    setTimeout(() => {
      //TL.restart();
      TL.seek("endAnim");
      TL.play();
    }, 7000)