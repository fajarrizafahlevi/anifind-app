import './search-bar';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container-fluid">
        <span class="navbar-brand text-light">ANIFIND</span>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
