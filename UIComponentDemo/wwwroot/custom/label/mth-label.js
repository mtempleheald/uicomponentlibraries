class MthLabel extends HTMLLabelElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}

customElements.define("mth-label", MthLabel, { extends: "label" } );