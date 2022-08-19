
import axios from 'axios';

export const urlBase = 'http://localhost:3001';
const urlBaseJsonPH = "https://jsonplaceholder.typicode.com/";

export const httpClient = axios.create();

const path = urlBase => (operation = "") => urlBase + operation;

const crud = urlBase => (entityName) => {
    const entityUrl = path(urlBase)(entityName);
  return {
      findAll: () => fetch(entityUrl).then(res => res.json()),
      findById: (id) => fetch(entityUrl + id).then(res => res.json()),
  }
}

export const crudJPH = crud(urlBaseJsonPH);
export const crudLocalhost = crud(urlBaseJsonPH);


