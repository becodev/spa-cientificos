import { getDataByID } from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
  const id = getHash();
  const character = await getDataByID(id);
  const { name, species, status, gender, image } = character;
  const origin = character.origin.name;
  const location = character.location.name;
  const episodes = character.episode.length;

  const view = `
    <div class="container row bg-light character">
    <img src="${image}" alt="${name}" class="col-sm-6 character-pic" />
        <div class=" col-sm-6">
          <h3 class="fs-1">${name}</h3>
          <article class="">
              <h5>Episodios: <span>${episodes}</span></h5>
              <h5>Status: <span>${status} </span></h5>
              <h5>Species: <span>${species}</span> </h5>
              <h5>Gender: <span>${gender} </span></h5>
              <h5>Origin: <span>${origin}</span></h5>
              <h5>last location: <span>${location}</span></h5>
          </article>
        </div>
    </div>`;

  return view;
};

export default Character;
