import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();

  const view = `
        <div class="character">
        ${characters.results.map((character) => {
          const { id, name, image } = character;
          return `
            <article class="character-item">
                <a href="#/${id}/">
                    <h2>${name}</h2>
                    <img src="${image}" alt="name">
                </a>
            </article>`;
        })}
            
        </div>  
    `;
  return view;
};

export default Home;
