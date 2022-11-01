const Subject = function () {
  this.observers = [];
};

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  },
  trigger: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

const subject = new Subject();

export default subject;
