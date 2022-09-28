// https://blog.mgechev.com/2015/03/09/build-learn-your-own-light-lightweight-angularjs/

const defaultDirectives = {
  "ng-click": function () {
    return {
      scope: false,
      link: function (el, scope, exp) {
        el.onclick = function () {
          const fn = scope.$eval(exp);
          const res = fn();
          scope.$digest();
          if (res instanceof Promise) {
            res.finally(() => {
              scope.$digest();
            });
          }
        };
      },
    };
  },
  "ng-bind": function () {
    return {
      scope: false,
      link: function (el, scope, exp) {
        el.innerHTML = scope.$eval(exp);
        scope.$watch(exp, function (val) {
          el.innerHTML = val;
        });
      },
    };
  },
  "ng-controller": function () {
    return {
      scope: true,
      link: function (el, scope, exp) {
        angular.getController(exp, scope);
        scope.$digest();
      },
    };
  },
};

class Angular {
  #directives = { ...defaultDirectives };
  #services = {};
  #controllers = {};
  #rootScope = new Scope();
  #cache = {};
  #moduleName;

  constructor(moduleName) {
    this.#moduleName = moduleName;
  }

  directive(name, fn) {
    this.#directives[name] = fn;
  }
  service(name, fn) {
    this.#services[name] = fn;
  }
  controller(name, args) {
    const [fn] = args.splice(-1, 1);
    this.#controllers[name] = { fn, deps: args };
  }

  getController(name, scope) {
    if (!this.#cache[name]) {
      const { deps, fn } = this.#controllers[name];
      const initialisedDeps = deps.map((depName) => this.getService(depName));
      const instance = fn(...initialisedDeps, scope);
      this.#cache[name] = instance;
    }
    return this.#cache[name];
  }

  getService(name) {
    if (!this.#cache[name]) {
      const fn = this.#services[name];
      const instance = fn();
      this.#cache[name] = instance;
    }
    return this.#cache[name];
  }

  getDirective(name) {
    if (!this.#cache[name]) {
      const fn = this.#directives[name];
      const instance = fn();
      this.#cache[name] = instance;
    }
    return this.#cache[name];
  }

  get rootScope() {
    return this.#rootScope;
  }
}

class Scope {
  #watchers = [];
  $children = [];
  $parent;

  constructor(parent) {
    this.$parent = parent;
  }

  $new() {
    const newScope = new Scope(this);
    Object.setPrototypeOf(newScope, this);
    this.$children.push(newScope);
    return newScope;
  }

  $destroy() {
    const parentChildren = this.$parent.$children;
    parentChildren.splice(parentChildren.indexOf(this), 1);
  }

  $watch(exp, fn) {
    this.#watchers.push({
      exp: exp,
      fn: fn,
      last: this.$eval(exp),
    });
  }

  $digest() {
    let dirty;
    do {
      dirty = false;
      for (const watcher of this.#watchers) {
        const current = this.$eval(watcher.exp);
        if (watcher.last !== current) {
          watcher.last = current;
          dirty = true;
          watcher.fn(current);
        }
      }
    } while (dirty);
    for (const child of this.$children) {
      child.$digest();
    }
  }

  $eval(exp) {
    return this[exp];
  }
}

class DOMCompiler {
  bootstrap() {
    this.compile(document.children[0], angular.rootScope);
  }
  compile(el, scope) {
    let scopeCreated = false;

    for (const attr of el.attributes) {
      if (!attr.name.startsWith("ng-")) {
        continue;
      }
      const directive = angular.getDirective(attr.name);
      if (directive.scope && !scopeCreated) {
        scope = scope.$new();
        scopeCreated = true;
      }
      directive.link(el, scope, attr.value);
    }

    for (const child of el.children) {
      this.compile(child, scope);
    }
  }
}

const angular = new Angular();
const domCompiler = new DOMCompiler();

angular.service("ShipService", function () {
  return {
    async fire() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
  };
});

angular.controller("RepublicCtrl", [
  "ShipService",
  function (shipService, $scope) {
    $scope.status = "alive";
    $scope.missilesFired = 0;
    $scope.destroyDeathStar = async function () {
      await shipService.fire();

      $scope.missilesFired++;
      if ($scope.missilesFired >= 3) {
        $scope.status = "dead";
      }
    };
  },
]);

domCompiler.bootstrap();
