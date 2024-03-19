

let animations = {};
export default animations = {
     runLamp : () => {
    let backGlow = document.getElementById("backGlow");
    let lampLedHead = document.getElementById("lampLed");
    let lampGlow = document.getElementById("lampGlow");
        lampGlow.style.height = "120%";
        lampGlow.style.transform = "scale(1.8)";
        lampLedHead.style.width = "50%";
        lampLedHead.style.blur = "1px";
},
    lampOff: () => {
    let glow = document.getElementById("tubecase");
    let lampGlow = document.getElementById("lampGlow");
        let lampLedHead = document.getElementById("lampLed");
        lampLedHead.style.width = "150%";
      lampGlow.style.width = "100%";
    // lampGlow.style.transform = "scale(1.5)";
  }
} 