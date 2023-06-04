export default class SwapiService {
  // const getResource = async (url) => {
    // const res = await fetch(url);
    
    // if (!res.ok) {
    // throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    // }
    
    // const body = await res.json();
    // return body;
    // }
    
    // getResource("https://swapi.dev/api/people/1")
    // .then((body) => {
    //   console.log(body);
    // })
    // .catch((error) => {
    //    console.error("Could not fetch",  error);
    // })   
    _apiBase = 'https://swapi.dev/api/'
    
      async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`) 
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
          }
    
          return await res.json(); 
      }
      // 
     async getAllPeople() {
        const res = await this.getResource(`/people/`) 
        return res.result
      }
      getPerson(id) {
        return this.getResource(`/people/${id}/`)
      }
    // 
      async getAllPlanets() {
        const res = await this.getResource(`/planets/`) 
        return res.result
      }
      getPlanet(id) {
        return this.getResource(`/planet/${id}/`)
      }
      // 
      async getAllStarships() {
        const res = await this.getResource(`/starships/`) 
        return res.result
      }
      getStarship(id) {
        return this.getResource(`/starships/${id}/`)
      }
    }
    
    const swapi = new SwapiService();
    
    swapi.getPerson(3) .then((p) => {
      console.log(p.name);
    });