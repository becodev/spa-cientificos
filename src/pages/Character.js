import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const { name, species, status, gender, image } = character;
  const origin = character.origin.name;
  const location = character.location.name;
  const episodes = character.episode.length;

  const view = `
    <div class="Character-inner">
        <article class="Character-card">
            <img src="${image}" alt="${name}" />
            <h2>Nombre: <span>${name} </span> </h2>
        </article>

        <article class="Character-card">
            <h3>Episodios: <span>${episodes}</span></h3>
            <h3>Status: <span>${status} </span></h3>
            <h3>Species: <span>${species}</span> </h3>
            <h3>Gender: <span>${gender} </span></h3>
            <h3>Origin: <span>${origin}</span></h3>
            <h3>last location: <span>${location}</span></h3>
        </article>
    </div>`;

  return view;
};

export default Character;
