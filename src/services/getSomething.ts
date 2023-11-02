export const BASE_URL = 'https://swapi.dev/api/people';

export async function getItem(request: string) {
  try {
    const response = await fetch(`${BASE_URL}/?search=${request}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function getPeople() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return {};
  }
}
