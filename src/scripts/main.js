import './component/app-bar';
import './component/search-bar';
import './component/anime-item';
import './component/search-result';
import $ from 'jquery';

const main = () => {
  // ! without jQuery:
  // const search = document.querySelector('search-bar');
  // const onSearchButtonClicked = () => {
  //   searchAnime(search.value);
  // };
  // search.clickEvent = onSearchButtonClicked;

  // * with jQuery:
  $('#searchButton').click(function () {
    searchAnime($('#searchInput').val());
  });

  const searchAnime = (keyword) => {
    const base_url = 'https://api.jikan.moe/v4';
    fetch(`${base_url}/anime?q=${keyword}`)
      .then((response) => response.json())
      .then((animes) => renderResults(animes.data))
      .catch((error) => console.warn(error.message));
  };

  const searchedResults = document.querySelector('search-result');

  const renderResults = (results) => {
    searchedResults.animes = results;
  };
};

export default main;
