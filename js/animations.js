gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
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
const totalSteps = steps.length;

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
  const prev = steps[i - 1] || null;
  const next = steps[i + 1] || null;

  document.querySelector(".year").innerText = current.dataset.year;
  document.querySelector(".title").innerText = current.dataset.title;
  document.querySelector(".text").innerText = current.dataset.text;

  document.querySelector(".slot.active").innerHTML = `
    <h2>${current.dataset.title}</h2>
    <p>${current.dataset.text}</p>
  `;

  if (prev) {
    document.querySelector(".slot.prev").innerHTML = `
      <h2>${prev.dataset.title}</h2>
      <p>${prev.dataset.text}</p>
    `;
    document.querySelector(".slot.prev").style.opacity = "0.3";
  } else {
    document.querySelector(".slot.prev").style.opacity = "0";
  }

  if (next) {
    document.querySelector(".slot.next").innerHTML = `
      <h2>${next.dataset.title}</h2>
      <p>${next.dataset.text}</p>
    `;
    document.querySelector(".slot.next").style.opacity = "0.3";
  } else {
    document.querySelector(".slot.next").style.opacity = "0";
  }
}

steps.forEach((step, i) => {
  let label = `step-${i}`;
  progressTL.add(() => updateContent(i));

  progressTL.add(label);

  let translateside = "-20%";
  if (i % 2 === 0) {
    translateside = "20%";
  } else if (i === 0) {
    translateside = 0;
  }

  progressTL.to(
    [".title", ".text"],
    { opacity: 0.3, y: -600, x: translateside, duration: 0.8 },
    label
  );

  progressTL.fromTo(
    ".title",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1 }
  );

  progressTL.fromTo(
    ".text",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1 }
  );
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
  })
  .to(".overlay-line", {
    height: "100vh", // يصبح ممتد على الشاشة
    duration: 1,
    ease: "power2.inOut",
  })

  // الآن يبدأ الخط يتوسع ليغطي الشاشة
  .to(".overlay-line", {
    width: "100vw",
    height: "100vh",
    duration: 1,
    ease: "power2.inOut",
  })
  .to(".overlay-images img", {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.4,
    ease: "power2.out",
  })
  .to(".overlay-final", {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.4,
    ease: "power2.out",
  });
