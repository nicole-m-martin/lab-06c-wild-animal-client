import request from 'superagent'

const URL = 'https://fathomless-ridge-92522.herokuapp.com'

export async function getWildAnimals() {
  const response = await request
  .get(`${URL}/wildAnimals`)
  return response.body;
}

export async function getColors(id) {
  const response = await request
  .get(`${URL}/colors`)
  return response.body;
}

export async function getOneAnimal(id) {
  const response = await request
  .get(`${URL}/wildAnimals/${id}`)
  return response.body;
}

export async function makeNewAnimal (oneWildAnimal) {
  const response = await request
  .post(`${URL}/wildAnimals/`)
  .send(oneWildAnimal)
  return response.body;
}

export async function deleteOneAnimal (id) {
const response = await request
.delete(`${URL}/wildAnimals/${id}`)
return response.body;
}

export async function updateWildAnimal(id, oneWildAnimal) {
const response = await request
.put(`${URL}/wildAnimals/${id}`)
.send(oneWildAnimal)
return response.body;
}
