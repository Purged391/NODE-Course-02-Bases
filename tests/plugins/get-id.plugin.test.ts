import { getId } from '../../src/plugins/get-id.plugin';


describe('plugins/get-id-plugin', () => {
    test('getId should return a string', () => {
        const id = getId();
        expect(typeof id).toBe('string');
        expect(id).toHaveLength(36);
    });

    test('getId should return a unique id', () => {
        const id = getId();
        const anotherId = getId();
        expect(id).not.toBe(anotherId);
    });
});