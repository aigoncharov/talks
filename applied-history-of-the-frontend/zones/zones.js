// https://medium.com/ngconf/deep-dive-into-zone-js-part-1-execution-context-92166bbb957

class Zone {
  static get current() {
    return currentFrame.zone;
  }

  fork() {
    const newZone = new Zone();
    Object.setPrototypeOf(newZone, this);
    return newZone;
  }

  run(callback, applyThis, applyArgs) {
    currentFrame = { parent: currentFrame, zone: this };
    try {
      return callback.apply(applyThis, applyArgs);
    } finally {
      currentFrame = currentFrame.parent;
    }
  }
}

let currentFrame = {
  zone: new Zone(),
  parent: null,
};

const originalSetTimeout = window.setTimeout;
window.setTimeout = function (callback, delay) {
  const zone = Zone.current;
  originalSetTimeout.call(
    window,
    function () {
      zone.run(callback);
    },
    delay
  );
};

const blowUpDeathStar = () => {
  console.log(`${Zone.current.heroName} started the mission "${Zone.current.missionName}"...`);
  setTimeout(() => {
    console.log(`${Zone.current.heroName} saved the Republic!`);
  }, 2000);
};

Zone.current.missionName = "Top Secret";

const zoneLuke = Zone.current.fork();
zoneLuke.heroName = "Luke";
const zoneHan = Zone.current.fork();
zoneHan.heroName = "Han";

zoneLuke.run(blowUpDeathStar);

setTimeout(() => {
  zoneHan.run(blowUpDeathStar);
}, 1000);
