export const BASE_URL = 'https://swapi.dev/api/people';

export async function getItem(request: string) {
  try {
    const response = await fetch(`${BASE_URL}/?search=${request}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function getPeopleByPage(page: number) {
  try {
    const response = await fetch(`${BASE_URL}/?page=${page}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
    return {};
  }
}
