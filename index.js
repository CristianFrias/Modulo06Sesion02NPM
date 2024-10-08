console.log("Introducción a NPM");

// ESM
import { validate, clean, format, getCheckDigit } from 'rut.js';
import { faker } from '@faker-js/faker';

const valid01 = validate('16.659.851-6')
const valid02 = validate('11.111.111-0')
console.log({valid01, valid02});

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        };
}
console.log(createRandomUser());