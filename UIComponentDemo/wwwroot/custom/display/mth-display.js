const template = document.createElement("template")
template.innerHTML = `
<style>
  :host {
    // override whatever was set from outside to better enforce the theme
    display: block !important;
    background-color: yellow !important;
    border: none !important;
  }
  :host([hidden]) {
    display: none;
  }

  div {
    // background-color: initial; revert; revert-layer; unset; all;
    padding: var(--display-vpad, 0) var(--display-hpad, 0);
    border: var(--display-border-width, 0) var(--display-border-style, solid) var(--display-border-colour); 
  }
</style>
<div>
  <slot></slot>
</div>
`

class MthDisplay extends HTMLElement {
  
  static observedAttributes = ["size"];

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "closed" })
    shadow.append(template.content.cloneNode(true))
  }
  
  // Element functionality written in here

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }
}

customElements.define("mth-display", MthDisplay );