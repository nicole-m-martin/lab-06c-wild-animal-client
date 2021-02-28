import request from 'superagent';

const URL = 'https://fathomless-ridge-92522.herokuapp.com'

// GET All Animals Function
export async function getWildAnimals() {
  const response = await request
  .get(`${URL}/wildAnimals`)
  return response.body;
}

// GET One Animal Function
export async function getOneAnimal(id) {
  const response = await request
  .get(`${URL}/wildAnimals/${id}`)
  return response.body;
}


// GET Size Category Function
export async function getSizes() {
  const response = await request
  .get(`${URL}/sizes`)
  return response.body;
}

// POST New Animal Function
export async function makeNewAnimal (oneWildAnimal) {
  const response = await request
  .post(`${URL}/wildAnimals/`)
  .send(oneWildAnimal)
  return response.body;
}

// DELETE One Animal Function
export async function deleteOneAnimal (id) {
const response = await request
.delete(`${URL}/wildAnimals/${id}`)
return response.body;
}

// PUT Update One Animal Function
export async function updateWildAnimal(id, oneWildAnimal) {
const response = await request
.put(`${URL}/wildAnimals/${id}`)
.send(oneWildAnimal)
return response.body;
}
