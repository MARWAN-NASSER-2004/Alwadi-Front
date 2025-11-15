gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top",
    end: "60%",
    scrub: true,
    snap: {
      snapTo: [0, 0.35, 1],
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

tl.addLabel("start");
tl.to(
    ".hero-title",
    {
      fontSize: "1.5rem",
      fontWeight: 200,
    },
    "step1"
  )

  .to(
    ".hero-subtitle",
    {
      fontSize: "4rem",
      fontWeight: 700,
    },
    "step1"
  );
tl.addLabel("stop1");

tl.to(
  ".slide-2",
  {
    opacity: 1,
    y: 0,
    duration: .1,
    ease: "power2.out",
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
  );

tl.addLabel("stop2");
