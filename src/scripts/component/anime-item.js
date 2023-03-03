class AnimeItem extends HTMLElement {
  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="animeItem" class="card" style="margin-bottom: 0.8rem">
        <img src="${this._anime.images.jpg.large_image_url}" class="card-img-top" alt="cover-image">
        <div class="card-body">
          <h5 class="card-title">${this._anime.title}</h5>
          <p class="card-subtitle mb-2 text-muted">${this._anime.status}, ${this._anime.episodes} episodes, MAL Score: ${this._anime.score}</p>
          <p class="card-text">${this._anime.synopsis}</p>
          <a href="${this._anime.url}" target="_blank" class="btn btn-primary">Find out more</a>
        </div>
      </div>
    `;
  }
}

customElements.define('anime-item', AnimeItem);
