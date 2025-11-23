gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
    snap: {
      snapTo: [0, 0.18, 1],
      duration: 0.6,
      delay: 0,
    },
  },
});

gsap.to(".scroll-icon span", {
  y: 5,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

tl.to(
  ".hero-title",
  {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    fontWeight: 200,
    duration: 0.3,
  },
  "step1"
).to(
  ".hero-subtitle",
  {
    fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
    fontWeight: 700,
    duration: 0.3,
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
    [".hero-title", ".hero-subtitle", ".scroll-icon span,.scroll-icon"],
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
  end: "+=62%",
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

// ------------------------------------------

const steps = document.querySelectorAll(".progress-step");

let progressTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".Progress",
    start: "5% top",
    end: "bottom bottom",
    pin: false,
    scrub: true,
    snap: {
      snapTo: [0, 0.18, 0.37, 0.57, 0.76, 1],
      duration: 2,
      delay: 0,
    },
  },
});

function updateContent(i) {
  const current = steps[i];

  document.querySelector(".year").innerText = current.dataset.year;

  if (i == 1) {
    progressTL.to(
      ".step-1",
      { scale: 0.5, opacity: 0.5, duration: 0.3, y: -250, x: -400 },
      "step-1"
    );
    progressTL.to(
      ".step-2",
      { scale: 1.5, opacity: 1, duration: 0.3, y: -180, x: -50 },
      "step-1"
    );
    progressTL.to(
      ".step-3",
      { scale: 0.5, opacity: 0.5, duration: 0.3, y: -500, x: -50 },
      "step-1"
    );
  } else if (i == 2) {
    progressTL.to(
      ".step-1",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -700 },
      "step-1"
    );
    progressTL.to(
      ".step-2",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -450, x: 0 },
      "step-1"
    );
    progressTL.to(
      ".step-3",
      { scale: 1.5, opacity: 1, duration: 0.6, y: -720, x: -50 },
      "step-1"
    );
    progressTL.to(
      ".step-4",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -820, x: -50 },
      "step-1"
    );
  } else if (i == 3) {
    progressTL.to(
      ".step-2",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -850, x: 0 },
      "step-1"
    );
    progressTL.to(
      ".step-3",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -900, x: -50 },
      "step-1"
    );
    progressTL.to(
      ".step-4",
      { scale: 1.5, opacity: 1, duration: 0.6, y: -900, x: 30 },
      "step-1"
    );
    progressTL.to(
      ".step-5",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -200 },
      "step-1"
    );
  } else if (i == 4) {
    progressTL.to(
      ".step-3",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -1520, x: -50 },
      "step-1"
    );
    progressTL.to(
      ".step-4",
      { scale: 0.5, opacity: 0.5, duration: 0.6, y: -1150, x: 30 },
      "step-1"
    );
    progressTL.to(
      ".step-5",
      { scale: 1.5, opacity: 1, duration: 0.6, y: -400 },
      "step-1"
    );
  }
}

steps.forEach((step, i) => {
  let label = `step-${i}`;
  progressTL.add(() => updateContent(i));

  progressTL.add(label);

  progressTL.to([".title", ".text"], {}, label);
});

// ------------------------------

let overlaytl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Progress",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

overlaytl
  .to(".overlay-section", { opacity: 1, duration: 0.3 })
  .to(".progress-bg", {
    scale: 1.1,
    duration: 2,
  })
  .to(
    ".overlay-line",
    {
      height: "100vh",
      duration: 1,
      ease: "power2.inOut",
    },
    "-=.7"
  )
  .to(".overlay-line", {
    width: "100vw",
    height: "100vh",
    duration: 1,
    ease: "power2.inOut",
  })
  .to(
    ".overlay-images img,.overlay-final",
    {
      scale: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .to(".final-left", {
    x: "110%",
    duration: 1.5,
    ease: "power2.inOut",
  })
  .to(
    ".final-right",
    {
      x: "-110%",
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  )
  .to(
    ".split-div",
    {
      left: 0,
      right: 0,
      duration: 1.47,
      ease: "power2.inOut",
    },
    "<"
  );

gsap.to(".member-2", {
  scrollTrigger: {
    trigger: ".member-1",
    start: "center bottom",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.to(".member-3", {
  scrollTrigger: {
    trigger: ".member-2",
    start: "center bottom",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.to(".board-members", {
  scrollTrigger: {
    trigger: ".member-2",
    start: "center bottom",
    toggleActions: "play none none reverse",
  },
  x: 0,
  duration: 2,
  ease: "power3.out",
});

gsap.to(".logo-bar", {
  scrollTrigger: {
    trigger: ".logo-bar",
    start: "top bottom",
    toggleActions: "play none none reverse",
    snap: {
      snapTo: [0, 0.25, 1],
      duration: 1,
      delay: 0,
    },
  },
  x: 0,
  duration: 0.8,
  ease: "power2.out",
});

// ----------------------------

ScrollTrigger.create({
  trigger: ".certificates-section",
  start: "bottom bottom",
  pin: true,
  pinSpacing: false,
});

let overlayfactory = gsap.timeline({
  scrollTrigger: {
    trigger: ".factory-section",
    start: "top",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

overlayfactory
  .to(
    ".factory-section > div:nth-child(2),.factory-section > div:nth-child(3),.factory-section > div:last-child ",
    {
      scale: 1,
      duration: 1.2,
      stagger: 0.6,
      ease: "power2.out",
    }
  )
  .to(".faq-section", {
    y: "-100vh",
    duration: 1.5,
    ease: "power2.out",
  });

gsap.to(".faq-section", {
  scrollTrigger: {
    trigger: ".faq-section",
    start: "top bottom",
    end: "+=500%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

// --------------------------

ScrollTrigger.create({
  trigger: ".footer",
  start: "bottom bottom",
  pin: true,
  pinSpacing: false,
});
