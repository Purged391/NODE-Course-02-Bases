//const {getAge, getId} = require('../plugins');

//const obj = {name: 'John Doe', birthdate: '01/01/1990'};

interface BuildMakePersonOptions{
    getAge: (birthdate: string) => number;
    getId: () => string;
}

interface PersonOptions{
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({getAge, getId}: BuildMakePersonOptions) => {
    return ({name, birthdate}: PersonOptions) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    };
};