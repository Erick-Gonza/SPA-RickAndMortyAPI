import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
  const page = await getHash();
  const characters = await getData(page);

  const sortCharacters = await characters.results.sort(
    () => Math.random() - 0.5
  );

  const view = `
  <section class="characters">
  ${sortCharacters
    .map(
      (character) => `
    <article class="character-item">
      <a href="#/${character.id}/">
      <img src="${character.image}" alt="${character.name}">
      
      <section>
        <h2>Name: ${character.name}</h2>
        <h2>Status: ${character.status}</h2>
      </section>
      </a>
    </article>
  `
    )
    .join('')}
</section>
`;
  return view;
};

export default Home;
