// Timeline for section two animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.two',
    start: '0% 95%',
    end: '70% 50%',
    scrub: true,
    // markers: true,
  },
});

tl.to(
  '#fanta',
  {
    top: '120%',
    left: '0%',
  },
  'orange',
)
  .to(
    '#orange-cut',
    {
      top: '160%',
      left: '23%',
    },
    'orange',
  )
  .to(
    '#orange',
    {
      width: '15%',
      top: '160%',
      right: '10%',
    },
    'orange',
  )
  .to(
    '#leaf',
    {
      top: '110%',
      rotate: '130deg',
      left: '70%',
    },
    'orange',
  )
  .to(
    '#leaf2',
    {
      top: '110%',
      rotate: '130deg',
      left: '0%',
    },
    'orange',
  );

// Timeline for section three animations
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.three',
    start: '0% 95%',
    end: '20% 50%',
    scrub: true,
    // markers: true,
  },
});

tl2
  .from(
    '.lemon1',
    {
      rotate: '-90deg',
      left: '-100%',
      top: '110%',
    },
    'ca',
  )
  .from(
    '#cocacola',
    {
      rotate: '-90deg',
      top: '110%',
      left: '50%',
      x: '-200%',
    },
    'ca',
  )
  .from(
    '.lemon2',
    {
      rotate: '90deg',
      left: '100%',
      top: '110%',
    },
    'ca',
  )
  .from(
    '#pepsi',
    {
      rotate: '90deg',
      top: '110%',
      left: '50%',
      x: '200%',
    },
    'ca',
  )
  .to(
    '#orange-cut',
    {
      width: '18%',
      left: '42%',
      top: '204%',
    },
    'ca',
  )
  .to(
    '#fanta',
    {
      width: '35%',
      top: '210%',
      left: '33%',
    },
    'ca',
  );

// Timeline to reset orange when scrolling back up
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.one',
    start: '0% 95%',
    end: '100% 95%',
    scrub: true,
    // markers: true,
  },
});

tl3.to(
  '#orange',
  {
    width: '20%',
    top: '55%',
    right: '30%',
  },
  'reset',
);
