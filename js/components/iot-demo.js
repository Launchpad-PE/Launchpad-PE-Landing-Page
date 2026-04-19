function randomBetween(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

/**Pierina*/
export function initIotDemo() {
  setInterval(() => {
    const vals = document.querySelectorAll('.iot-s-val');
    if (vals[0]) vals[0].innerHTML = `${randomBetween(400, 430)} <span>ppm</span>`;
    if (vals[1]) vals[1].innerHTML = `${randomBetween(15, 25)} <span>µg/m³</span>`;
    if (vals[2]) vals[2].innerHTML = `${randomBetween(20, 26)} <span>°C</span>`;
    if (vals[3]) vals[3].innerHTML = `${randomBetween(60, 75)} <span>%</span>`;

    const heroVals = document.querySelectorAll('.sensor-cell .s-val');
    if (heroVals[0]) heroVals[0].innerHTML = `${Math.round(randomBetween(60, 75))}<span>%</span>`;
    if (heroVals[1]) heroVals[1].innerHTML = `${Math.round(randomBetween(20, 25))}<span>°C</span>`;
    if (heroVals[2]) heroVals[2].innerHTML = `${randomBetween(6.0, 7.0)}`;
    if (heroVals[3]) heroVals[3].innerHTML = `${Math.round(randomBetween(10, 16))}<span>L/h</span>`;
  }, 5000);
}
