const API = "https://rickandmortyapi.com/api/character";
let apiURL = ``;

const getData = async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Fetch error:", error);
  }
};

export const getAllData = async () => {
  apiURL = `${API}`;
  const response = await getData(apiURL);

  return response;
};

export const getDataByID = async (id) => {
  apiURL = `${API}/${id}`;

  return await getData(apiURL);
};
