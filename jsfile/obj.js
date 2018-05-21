// let pet = {
//     type: 'ハムスター',
//     name: 'キラ',
//     description: {
//         birth: '2014-02-15',
//     }
// };
// let pet2 = {
//     color: '白',
//     name: '山田キラ',
//     description: {
//         food: 'たね',
//     }
// };
// let pet3 = {
//     weight: 42,
//     photo: 'http://wwww.',
// };
//
// Object.assign(pet, pet2, pet3);
// console.log(pet);
//
// let marged = Object.assign({}, pet, pet2, pet3);
// console.log(marged);

'use strict';

var pet = {type: 'スノーホワイト', name: 'キラ'};

// Object.preventExtensions(pet);
// Object.seal(pet);
Object.freeze(pet);

pet.name = 'きら';
delete pet.type;
pet.weight = 42;
