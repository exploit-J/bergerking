const smSlide = tns({
  container: ".slide-sm",
  navContainer: ".slide .slide-nav",
  controlsContainer: ".slide .slide-ctrl",
  autoplay: true,
  autoplayTimeout: 4000,
  preventScrollOnTouch: "auto",
});

const lgSlide = tns({
  container: ".slide-lg",
  navContainer: ".slide .slide-nav",
  controlsContainer: ".slide .slide-ctrl",
  autoplay: true,
  autoplayTimeout: 4000,
  preventScrollOnTouch: "auto",
  mouseDrag: true,
});
