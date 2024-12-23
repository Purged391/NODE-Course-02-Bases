import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory', () => {
    const getAge = (birthdate: string) => 35;
    const getId = () => '123';
    test('buildPerson should return a function', () => {
        const makePerson = buildMakePerson({getAge, getId});  
        expect(makePerson).toBeInstanceOf(Function);  
    });
    test('makePerson should return a person object', () => {
        const makePerson = buildMakePerson({getAge, getId});
        const person = makePerson({name: 'John Doe', birthdate: '01/01/1990'});
        expect(person).toEqual({id: '123', name: 'John Doe', birthdate: '01/01/1990', age: 35});
    });
});
