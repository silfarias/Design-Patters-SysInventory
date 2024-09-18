import axios from 'axios';

axios.create()
// Axios o Fetch
export class HttpApi {

    async get(url: string): Promise<any> {
        const response = await axios.get(url);
        return response
    }
    async post(url: string, data: any) {
        const response = await axios.post(url, data);
        return response.data
    }
    async put(){}
    async delete(){}
}