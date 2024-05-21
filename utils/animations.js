// src/utils/animations.js

const animations = {
  runLamp: () => {
    let backGlow = document.getElementById("backGlow");
    let lampLedHead = document.getElementById("lampLed");
    let lampGlow = document.getElementById("lampGlow");

    if (backGlow && lampLedHead && lampGlow) {
      lampGlow.style.height = "120%";
      lampGlow.style.transform = "scale(1.8)";
      lampGlow.style.position = "center";
      lampLedHead.style.width = "30%";
      lampLedHead.style.blur = "1px";
    }
  },
  lampOff: () => {
    let glow = document.getElementById("tubecase");
    let lampGlow = document.getElementById("lampGlow");
    let lampLedHead = document.getElementById("lampLed");

    if (glow && lampGlow && lampLedHead) {
      lampLedHead.style.width = "150%";
      lampGlow.style.width = "100%";
      lampGlow.style.transform = "scale(1.5)";
    }
  },
  handleScrollAnimation: (products, flexContainerRef) => {
    const scrollY = window.scrollY;
    const flexContainerRect = flexContainerRef.getBoundingClientRect();

    const startEffectScrollY = flexContainerRect.top - window.innerHeight + 100;

    const scrollProgress = Math.min(
      1,
      Math.max(
        0,
        (scrollY - startEffectScrollY) /
          (window.innerHeight + flexContainerRef.clientHeight)
      )
    );

    products.forEach((product, index) => {
      const offsetY = (2 - scrollProgress) * (index * 100);
      product.style = {
        transform: `translateY(${offsetY}px)`,
        zIndex: `${100 - index}`,
      };
    });
  }
};

export default animations;
