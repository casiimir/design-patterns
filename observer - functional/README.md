#### Behavioral Pattern - OBSERVER - functional

`observer.js`

- `subscribe` a function to the observer
- `unsubscribe` a function to the observer
- `trigger` all listening functions from the observer

<hr>

> example:
> `external1.js` and `external2.js` are two functions that fetch a list of products (JSON) and render via `imgComponent.js` a list of cards relatively to less or more 100$ price. Finally `app.js` triggers, subscribes and unsubscribes by clicking the relative page buttons.
