//!01-Template
import {emailTemplate} from './js-foundation/01-template';

//!02-Destructuring
import * as d from './js-foundation/02-destructuring';

//!03-Callback
import {getUserByIdA} from './js-foundation/03-callbacks';

//!04-Arrow
import {getUserById} from './js-foundation/04-arrow';

const id = 1;

getUserById(id, (error, user) => {
    if(error) throw new Error(error);
    console.log(user);
});



// !05-factory
import {getAge, getId} from './plugins';
import {buildMakePerson} from './js-foundation/05-factory';

const makePerson = buildMakePerson({getAge, getId});
const obj = {name: 'John Doe', birthdate: '01/01/1990'};
const john = makePerson(obj);
console.log(john);

//! 06-Promises
import {getPokemonByIdP, getPokemonByIdA, getPokemonById} from './js-foundation/06-promises';

getPokemonById(4)
    .then((pokemon) => console.log({pokemon}))
    .catch(error => console.error(error))
    .finally(() => console.log('Finally'));


//!Logger Winston
//Patron Adapter
import {buildLogger} from './plugins/logger.plugin';
const logger = buildLogger('app.js');
logger.log('Hello from app.js');
logger.error('Error from app.js');


//!Typescript
//Migration from js to ts
export const name: string = 'John Doe';
console.log(name);