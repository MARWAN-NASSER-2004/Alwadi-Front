gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: true,
    snap: {
      snapTo: [0, 0.3, 1],
      duration: 0.6,
      delay: 0,
    },
  },
});

gsap.to(".scroll-icon span", {
  y: 10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

tl.to(
  ".hero-title",
  {
    fontSize: "1.5rem",
    fontWeight: 200,
  },
  "step1"
).to(
  ".hero-subtitle",
  {
    fontSize: "4rem",
    fontWeight: 700,
  },
  "step1"
);

tl.to(
  ".slide-2",
  {
    opacity: 1,
    y: 0,
    duration: 0.1,
    ease: "none",
  },
  "step2"
)
  .to(
    [".hero-title", ".hero-subtitle"],
    {
      opacity: 0,
      duration: 0.5,
    },
    "step2"
  )
  .to(".hero-overlay", {
    backgroundColor: "rgba(0,0,0,0.6)",
    ease: "none",
    duration: 0.6,
  });

ScrollTrigger.create({
  trigger: ".Progress",
  start: "top top",
  pin: true,
  pinSpacing: false,
});

gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    pinSpacing: false,
    snap: {
      snapTo: 1,
      duration: 0.5,
      ease: "power1.out",
    },
  },
});

const steps = document.querySelectorAll(".progress-step");

steps.forEach((step, i) => {
  ScrollTrigger.create({
    trigger: ".Progress",
    start: `${(i / steps.length) * 100}% top`,
    end: `${((i + 1) / steps.length) * 100}% top`,
    onEnter: () => updateStep(step),
    onEnterBack: () => updateStep(step),
  });
});

function updateStep(step) {
  document.querySelector(".year").innerText = step.dataset.year;
  document.querySelector(".title").innerText = step.dataset.title;
  document.querySelector(".text").innerText = step.dataset.text;
}
