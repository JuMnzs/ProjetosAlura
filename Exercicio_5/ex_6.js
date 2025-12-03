import {pessoas} from './ex_1.js';

for (let chave in pessoas) {
  console.log(`${chave}: ${pessoas[chave]}`);
}