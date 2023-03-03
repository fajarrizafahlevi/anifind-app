import './anime-item';

class SearchResult extends HTMLElement {
  set animes(animes) {
    this._animes = animes;
    this.render();
  }

  render() {
    const animeByCategories = this._animes.reduce((all, anime) => {
      const { type } = anime;
      if (all[type] === undefined) all[type] = [];
      all[type].push(anime);
      return all;
    }, {});

    this.innerHTML = Object.keys(animeByCategories)
      .map((key) => {
        this._animes = animeByCategories[key]
          .map((anime) => {
            const animeItemElement = document.createElement('anime-item');
            animeItemElement.anime = anime;
            return animeItemElement.innerHTML;
          })
          .join('');

        return `
          <section id="searchedResults" class="container">
            <h3>${key.toUpperCase()}</h3>
            <div>${this._animes}</div>
          </section>
        `;
      })
      .join('');
  }
}

customElements.define('search-result', SearchResult);
