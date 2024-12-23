import exp from 'constants';
import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client-plugin', () => {
    test('httpClientPlugin should return a string', async() => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: expect.any(Boolean),
        });
    });
    test('httpClientPlugin should have POST, PUT and DELETE methods', async() => {
        expect(httpClientPlugin.post).toBeDefined();
        expect(typeof httpClientPlugin.post).toBe('function');
        expect(httpClientPlugin.put).toBeDefined();
        expect(typeof httpClientPlugin.put).toBe('function');
        expect(httpClientPlugin.delete).toBeDefined();
        expect(typeof httpClientPlugin.delete).toBe('function');
    });
});