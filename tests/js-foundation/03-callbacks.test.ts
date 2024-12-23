import {getUserByIdA} from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
    test('getUserByIdA should return an error if user does not exist', (done) => {
        const id = 10;
        getUserByIdA(id, (err, user) => {
            expect(err).toBe(`USER not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });
    test('getUserById should return John Doe', (done) => {
        const id = 1;
        getUserByIdA(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({ id: 1, name: 'John Doe' });
            done();
        });
    });
});