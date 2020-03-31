# JavaScript Object Traverse
## Version History
1.0 - 3/31/2020 - Initial release


## Introduction
Traverse any object, any number of levels deep by the use of recursive function. You can also pass in a list of elements on which to perform a selection. 

Key features include:
1. Traverse any object.
2. Ability to output the object outline/contents in the console.
3. Ability to safely select and return elements.
4. Select all or first matching elements.

## Prerequisites
 - None
## Setup
Download from GitHub ...

objectTraverse.js  - contains the main module that performs the traverse.
main.js - contains an example of how to call and use the objectTraverse.
objectTraverse.html - example of how to include in html code.

## Traverse and Output Outline
You can use the following options to output an outline of a given obj in the console.
```
traverseObject(obj, {map: true});
```
The output will display something like this:

```
key firstName : value Fred
key lastName : value Smith
Object address
---key street : value 123 Main St
---key city : value salt lake
---key state : value UT
Array relatives
---Object 0
------key relation : value son
------key name : value Roy Smith
------key age : value 23
------Array pets
---------key 0 : value mouse
------Object address
---------key street : value 999 High St
---------key city : value salt lake
---------key state : value UT
---Object 1
------key relation : value wife
------key name : value Mary Smith
------key age : value 54
------Array pets
------Object address
---------key street : value 123 Main St
---------key city : value salt lake
---------key state : value UT
Array pets
---key 0 : value dog
---key 1 : value cat
---key 2 : value snake
key salary : value null
```
### Element Selector
You can select one or more elements from the obj by using the select parameter. For example, 

```
let match = traverseObject(obj, { select: ['relatives',0,'relation']});
```
This is the equivalent of relatives[0].relation. The result is returned in an array, or will return false if no elements are found.

You can specify to return the first matched element or all matches. 

```
let match = traverseObject(obj, { select: ['pets'], matchAll: true });
```
The above would return an array of 3 arrays. The first array element would be the pets associated with the son (mouse) and the 2nd array element would be the pets associated with wife (empty) and the 3rd array element at the root obj level (dog, cat, snake).