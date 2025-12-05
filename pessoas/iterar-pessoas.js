import {pessoas} from './pessoas.js';

for (let chave in pessoas) {
  console.log(`${chave}: ${pessoas[chave]}`);
}