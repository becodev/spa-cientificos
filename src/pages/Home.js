import { getAllData } from "../utils/getData";

const Home = async () => {
  const characters = await getAllData();

  const view = `
        <div class="characters row justify-content-center">
        ${characters.results
          .map((character) => {
            const { id, name, image } = character;
            return `
            <div class="card character-item" style="width: 18rem;">
            <img src="${image}" class="card-img-top" style="width:auto">
                <a href="#/${id}">
                
                <div class="card-body">
                  <h2 class="card-title">${name}</h2>
                </div>    
                </a>
            </div>`;
          })
          .join("")}
        </div>  
        
    `;
  return view;
};

export default Home;
