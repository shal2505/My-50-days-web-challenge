# Day 42 – UI Architecture (Native Web Components)

On **Day 42** of the **50 Days Dev Web Development Challenge**, I focused on implementing **Native Web Components** to create reusable, modular and maintainable UI elements without relying on third-party frameworks.

I created a reusable **`<user-card>` Custom Element** for the **Synexus Official** platform. The component accepts dynamic attributes such as `name` and `role`, allowing the same UI structure to be reused for different users without duplicating HTML code.

I implemented the component using an **ES6 class that extends `HTMLElement`** and registered it using `customElements.define()`. I also used the **Shadow DOM** with `attachShadow({ mode: 'open' })` to encapsulate the component's HTML and CSS, preventing external styles from interfering with the component.

I used the **`connectedCallback()` lifecycle method** to detect when the custom element is added to the DOM, retrieve its attributes using `getAttribute()`, and dynamically render the user card inside the Shadow DOM.

As a **Bonus Challenge**, I implemented **reactive attributes** using `observedAttributes` and `attributeChangedCallback()`. This allows the component to automatically re-render whenever its `name` or `role` attributes are changed using JavaScript.

### What I Learned

* Understanding how **Web Components** work in modern browsers.
* Creating reusable UI elements using **Custom Elements**.
* Using `class extends HTMLElement` to create custom HTML elements.
* Registering components using `customElements.define()`.
* Understanding and using the **Shadow DOM**.
* Encapsulating HTML and CSS inside a component.
* Using the `connectedCallback()` lifecycle method.
* Retrieving dynamic values using `getAttribute()`.
* Creating reusable components following the **DRY principle**.
* Understanding Web Component lifecycle callbacks.
* Using `observedAttributes` to monitor attribute changes.
* Using `attributeChangedCallback()` for reactive components.
* Building modular and maintainable UI architecture using Vanilla JavaScript.

### Technologies Used

* HTML5
* CSS3
* JavaScript ES6+
* Web Components API
* Custom Elements
* Shadow DOM
* ES6 Classes
* Lifecycle Callbacks
* `customElements.define()`
* `connectedCallback()`
* `attributeChangedCallback()`
* Browser DevTools

### Outcome

Successfully implemented a **reusable Native Web Component** for the **Synexus Official** platform using the Web Components API and Shadow DOM.

The application can now create multiple **`<user-card>` components** with different user information while keeping the component structure and styling encapsulated and reusable.

I also implemented the **reactive attribute bonus**, allowing user cards to update automatically when their attributes are modified.

This day strengthened my understanding of **Web Components, Custom Elements, Shadow DOM, component lifecycle, reusable UI architecture and modular JavaScript**, providing a strong foundation for building scalable and maintainable web applications.
