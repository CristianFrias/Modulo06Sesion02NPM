console.log("Introducción a NPM");

// ESM
import { validate, clean, format, getCheckDigit } from 'rut.js';
import { createRandomUser, calcularEdad } from './utils.js';

const valid01 = validate('16.659.851-6')
const valid02 = validate('11.111.111-0')
console.log({valid01, valid02});

const user = createRandomUser();
user.age = calcularEdad(user.birthdate)
console.log(user)