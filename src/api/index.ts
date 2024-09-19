import { HttpApi } from "./httpApi";

const httpApi = new HttpApi();

httpApi.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response))