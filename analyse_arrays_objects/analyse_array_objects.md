# Analyse Arrays and Objects Performance

## Learning Objectives

* Understand how objects and arrays work, through the lens of Big O
* Explain why adding elements to the beginning of an array is costly
* Compare and contrast the runtime for arrays and objects, as well as built-in method


### When to use Objects

* When you don't need order
* When you need fast access / insertion and removal

### Big O of Objects

* Insertion - O(1)
* Removal - O(1)
* Searching - O(N)
* Access - O(1)

### Big O of Objects Methods

* Objects.keys - O(N)
* Objects.values - O(N)
* Objects.entries - O(N)
* hasOwnProperty - O(1)

### When to use Arrays

* When you need order
* When you need fast access / insertion and removal(sort of fast)

### Big O of Arrays

* Insertion - It depends...
* Removal - It depends...
* Searching - O(N)
* Access - O(1)

### Big O of Array operations

* push - O(1)
* pop - O(1)
* shift - O(N)
* unshift - O(N)
* concat - O(N)
* slice - O(N)
* splice - O(N)
* sort - O(N * log N)
* forEach/map/filter/reduce/etc. - O(N)

### Limitations of arrays

> Inserting at the beginning is not as easy as we might think.
