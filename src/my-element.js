import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

}

window.customElements.define('my-element', MyElement)
