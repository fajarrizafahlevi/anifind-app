class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchInput').value;
  }

  render() {
    this.innerHTML = `
      <div class="d-flex container" role="search">
        <input id="searchInput" class="form-control me-2" type="search" placeholder="Search anime..."
          aria-label="Search">
        <button id="searchButton" class="btn btn-primary" type="submit">Search</button>
      </div>
    `;

    this.querySelector('#searchButton').addEventListener(
      'click',
      this._clickEvent,
    );
  }
}

customElements.define('search-bar', SearchBar);
