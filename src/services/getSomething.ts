export const BASE_URL = 'https://swapi.dev/api/people/?search=';

export async function getSomething(request: string) {
  try {
    const response = await fetch(`${BASE_URL}${request}`);
    const data = await response.json();
    localStorage.setItem('lastReq', JSON.stringify(data.results));
    return data;
  } catch (e) {
    console.log(e);
    return {};
  }
}
