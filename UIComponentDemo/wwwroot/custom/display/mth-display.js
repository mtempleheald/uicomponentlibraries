const template = document.createElement("template")
template.innerHTML = `
  <div>
    <slot></slot>
  </div>
`

class MthDisplay extends HTMLElement {
  
  static observedAttributes = ["size"];

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: "open" })
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