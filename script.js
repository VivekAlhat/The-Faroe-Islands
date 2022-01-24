let tl = gsap.timeline();

tl.from(".bg", {
  duration: 1.5,
  opacity: 0,
  ease: Expo.EaseOut,
  delay: 1,
})
  .to(
    ".text-reveal",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      y: 0,
      stagger: 0.3,
      duration: 1,
    },
    "-=3"
  )
  .to(".text-reveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: -200,
    duration: 0.2,
    delay: 0.5,
  })
  .to(".text-reveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    duration: 0.3,
    stagger: 0.3,
    delay: 0.5,
  })
  .to("svg", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", y: -150 })
  .to(
    ".local",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      y: 0,
      stagger: 0.3,
      opacity: 1,
      duration: 1,
    },
    "-=1.5"
  );
