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
  end: "+=100%",
  pin: true,
  pinSpacing: false,
});

gsap
  .timeline({
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
  })
  .to(".Progress", {
    pin: false,
  });

gsap.registerPlugin(ScrollTrigger);

// ------------------------------------------

const steps = document.querySelectorAll(".progress-step");
const totalSteps = steps.length;

let progressTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".Progress",
    start: "1% top",
    end: "bottom bottom",
    pin: false,
    scrub: true,
    snap: 1 / (totalSteps - 1),
  },
});

// Initialize first step
(function initFirstStep() {
  updateContent(0);
})();

// Global update function
function updateContent(i) {
  const current = steps[i];
  const prev = steps[i - 1] || null;
  const next = steps[i + 1] || null;

  // Update year + main title/text
  document.querySelector(".year").innerText = current.dataset.year;
  document.querySelector(".title").innerText = current.dataset.title;
  document.querySelector(".text").innerText = current.dataset.text;

  // ACTIVE
  document.querySelector(".slot.active").innerHTML = `
    <h2>${current.dataset.title}</h2>
    <p>${current.dataset.text}</p>
  `;

  // PREV
  if (prev) {
    document.querySelector(".slot.prev").innerHTML = `
      <h2>${prev.dataset.title}</h2>
      <p>${prev.dataset.text}</p>
    `;
    document.querySelector(".slot.prev").style.opacity = "0.3";
  } else {
    document.querySelector(".slot.prev").style.opacity = "0";
  }

  // NEXT
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

// Build GSAP timeline
steps.forEach((step, i) => {
  let label = `step-${i}`;

  // Move to label
  progressTL.add(label);

  // Update all content exactly at this step
  progressTL.add(() => updateContent(i));

  // Animate out
  progressTL.to(
    [".title", ".text"],
    { opacity: 0, y: -30, duration: 0.3 },
    label
  );

  // Animate in
  progressTL.fromTo(
    ".title",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.4 }
  );

  progressTL.fromTo(
    ".text",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.4 }
  );
});
