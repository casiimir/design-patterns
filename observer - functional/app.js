import subject from "./observer.js";
import observer1 from "./external1.js";
import observer2 from "./external2.js";

const clearWrapperAndObservers = () => {
  subject.observers.includes(observer1) && subject.unsubscribe(observer1);
  subject.observers.includes(observer2) && subject.unsubscribe(observer2);
  document.querySelector(".wrapper").innerHTML = "";
};

const btnLess = document.querySelector(".btnLess");
const btnMore = document.querySelector(".btnMore");

btnLess.addEventListener("click", () => {
  clearWrapperAndObservers();

  subject.subscribe(observer1);
  subject.trigger();
});

btnMore.addEventListener("click", () => {
  clearWrapperAndObservers();

  subject.subscribe(observer2);
  subject.trigger();
});
