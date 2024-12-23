import exp from 'constants';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age-plugin', () => {
    test('getAge should return the age of a person', () => {
        const birthdate = '01/01/1990';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('getAge should return current age', () => {
        const birthdate = '01/01/1990';
        const age = getAge(birthdate);
        const calculatedAge = getAge('01/01/1990');
        expect(age).toBe(calculatedAge);
    });

    test('getAge should return 0 years', () => {
        
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990);
        const birthdate = '01/01/1990';
        const age = getAge(birthdate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    });
});