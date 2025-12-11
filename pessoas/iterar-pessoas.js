import {pessoas} from './dados-pessoas.js';

for (let chave in pessoas) {
  console.log(`${chave}: ${pessoas[chave]}`);
}