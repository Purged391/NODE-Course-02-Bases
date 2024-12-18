import axios from 'axios';

// const buildHttpClient = (headers) => {
//     return {
//         get: async (url) => {
//             const {data} = await axios.get(url, headers);
//             return data;
//         },
//         post: async (url, data) => {},
//         put: async (url, data) => {},
//         delete: async (url, data) => {},
//     };
// }   

export const httpClientPlugin = {
    get: async (url: string) => {
        const {data} = await axios.get(url);
        return data;  
    },
    post: async (url: string, body: any) => {},
    put: async (url: string, body: any) => {},
    delete: async (url: string, body: any) => {},
}