import { traverseObject } from './objectTraverse.js';

let obj = {
   firstName: 'Fred',
   lastName: 'Smith',
   address: {
      street: '123 Main St',
      city: 'salt lake',
      state: 'UT'
   },
   relatives: [{
      relation: 'son',
      name: 'Roy Smith',
      age: 23,
      pets: ['mouse'],
      address: {
         street: '999 High St',
         city: 'salt lake',
         state: 'UT'
      }
   }, {
      relation: 'wife',
      name: 'Mary Smith',
      age: 54,
      pets: [],
      address: {
         street: '123 Main St',
         city: 'salt lake',
         state: 'UT'
      }
   }],
   pets: ['dog', 'cat', 'snake'],
   salary: null
};

let match1 = traverseObject(obj, { map: true, select: ['pets'], matchAll: true });
console.log(`matched 1 : ${match1}`);

let match2 = traverseObject(obj, { map: false, select: ['street'], matchAll: false });
console.log(`matched 2 : ${match2}`);
//# sourceMappingURL=main.js.map