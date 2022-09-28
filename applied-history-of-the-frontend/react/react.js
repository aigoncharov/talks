class React {
  #hooks = [];
  #currentHook = 0;
  #rootElement = null;
  #Component = null;

  createElement(type, props, ...children) {
    return {
      type,
      props,
      children,
    };
  }

  render(Component, element) {
    this.#Component = Component;
    this.#rootElement = element;
    this.#draw();
  }

  useState(initialValue) {
    this.#hooks[this.#currentHook] = this.#hooks[this.#currentHook] || initialValue;
    const setStateHookIndex = this.#currentHook;
    const setState = (newState) => {
      this.#hooks[setStateHookIndex] = newState;
      this.#draw();
    };
    return [this.#hooks[this.#currentHook++], setState];
  }

  #draw() {
    this.#rootElement.innerHTML = "";

    const root = this.#Component();
    const queue = [[root, this.#rootElement]];
    while (queue.length) {
      const [next, parent] = queue.shift();

      let element;
      if (typeof next === "string") {
        element = document.createTextNode(next);
      } else {
        element = document.createElement(next.type);
        for (const [propName, propVal] of Object.entries(next.props)) {
          element[propName] = propVal;
        }
        queue.push(...next.children.map((child) => [child, element]));
      }

      parent.appendChild(element);
    }

    this.#currentHook = 0;
  }
}
const react = new React();

const RepublicFleetComponent = () => {
  const [missilesFired, setMissilesFired] = react.useState(0);
  const destroyDeathStar = async () => {
    console.log("Launching a missile...");
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log("Launched!");
    setMissilesFired(missilesFired + 1);
  };

  return react.createElement(
    "div",
    {},
    react.createElement("button", { onclick: destroyDeathStar, disabled: missilesFired >= 3 }, "Destroy!"),
    react.createElement("p", {}, `Fired ${missilesFired} missiles. Death star is ${missilesFired >= 3 ? "dead" : "alive"}.`)
  );
};

react.render(RepublicFleetComponent, document.getElementById("root"));
