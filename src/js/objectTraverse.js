// Checks the specified elements path exists in the obj and if so returns the match
// ------ Parameters --------------
// nestedObj - object - object to check
// pathArr - array - list of elements used to match 
// ---------- Return --------------- 
// Matched element in obj or undefined 
const checkObjectMatch = (nestedObj, pathArr) => {
   return pathArr.reduce((obj, key) => {
      return (obj && obj[key] !== 'undefined') ? obj[key] : undefined
   }, nestedObj);
}

// Traverse any object by the use of recursive function. You can also pass in a list of
// elements on which to perform a selection. 
// For example, 
//     'select = ['relatives', 0, 'relation']' = relatives[0].relation
//     'select = ['address', 'city']' = address.city
// Note select does not have to start at root element
// ------ Parameters --------------
// obj - object - object to traverse
// options - object containing optional parameters defining how traverse works 
//      map - bool - if true display map of obj in console
//      select - array - list of elements used to match 
//      matchAll - bool - false return first match, true return all matches
// ---------- Return ---------------
// array - list of matched elements or false if no elements matched
let level = 0;
let matchedSelect = false
export function traverseObject(obj, { map = false, select = [], matchAll = false }) {

   if (level === 0) matchedSelect = false;
   let paddingChars = (level === 0) ? '' : '---'.repeat(level);

   for (let key in obj) {

      // use hasOwnProperty to skip over inherited properties
      if (obj.hasOwnProperty(key)) {

         // If select is populated then we need to check for pattern match
         // Checks current object key value against first set of criteria 
         // to see if we are at the point to start selection extraction

         if ((!matchAll && !matchedSelect) || matchAll) {
            if (select && select.length > 0 && key == select[0]) {
               if (select.length === 1) {

                  if (!matchedSelect) matchedSelect = [];
                  matchedSelect.push(obj[key]);

               } else {

                  let curMatchedSelect = checkObjectMatch(obj[key], select.slice(1));
                  if (curMatchedSelect) {
                     if (!matchedSelect) matchedSelect = [];
                     matchedSelect.push(curMatchedSelect);
                  }

               }

               if (matchedSelect && !matchAll && !map) {
                  return matchedSelect;
               }
            }
         }

         // if we have an array or object we need to keep traversing 
         // down the object
         if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (Array.isArray(obj[key])) {
               if (map) { console.log(`${paddingChars}Array ${key}`) };

            } else {
               if (map) { console.log(`${paddingChars}Object ${key}`) };
            }

            level++;
            matchedSelect = traverseObject(obj[key], { map, select, matchAll });
            // not mapping and found match then return
            if (matchedSelect && !matchAll && !map) {
               return matchedSelect;
            }

            // returned from processing higher level so revert back to
            // lower level
            level--;

         } else {
            if (map) { console.log(`${paddingChars}key ${key} : value ${obj[key]}`) };
         }
      }
   }
   return matchedSelect;
}