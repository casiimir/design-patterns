import subject from "./observer.js";
import imgComponent from "./imgComponent.js";

async function observer1() {
  return await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) =>
      json
        .filter((product) => product.price <= 100)
        .forEach((product) =>
          imgComponent(product.image, document.querySelector(".wrapper"))
        )
    );
}

// subject.subscribe(observer1);

export default observer1;
