import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
  <div class="characters">
  ${characters.results.map(character => `
    <div class="character-item">
    <h2>${character.name}</h2>
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
      </a>
    </div>
  `).join('')}
</div>
`;
  return view;
};

export default Home;
