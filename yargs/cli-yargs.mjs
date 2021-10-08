#!/usr/local/bin/node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const hero = ({ name, age, power }) => ({ name, age, power, id: Date.now() });

const { argv } = yargs(hideBin(process.argv)).command('createHero', 'Create a hero', (builder) => {

    return builder
            .option('name', { alias: 'n', demandOption: true, describe: 'Heros name', type: 'string' })
            .option('age', { alias: 'a', demandOption: true, describe: 'Heros age', type: 'number' })
            .option('power', { alias: 'p', demandOption: true, describe: 'Heros power', type: 'string' })
            .example('createHero --name Flash --age 55 --power Speed', 'Create a hero')
            .example('createHero -n Flash -a 55 -p Speed', 'Create a hero');

}).epilog('Copyright 2021 - Igor Moura');

console.log(hero(argv));