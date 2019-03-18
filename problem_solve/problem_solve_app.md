# Algorithms and Problem Solving Approach

## Learning Objectives

* Define what an algorithm is
* Devise a plan to solve Algorithms
* Compare and contrast problem solving patterns including frequency counters,
two pointer problems and divide and conquer

## What is Algorithm?

> A process or set of steps to accomplish a certain task

### Problem solving (adapted from George Polya's "How to Solve it" and Colt Steele)

* Understand the problem
* Explore Concrete Examples
* Break It Down
* Solve/Simplify
* Look Back and Refractor

### Points utilise to understand the problems

* Can I restate the problem in my own words?
* What are the inputs that go into the problem?
* What are the outputs that should come from the solution to the problem?
* Can the outputs be determined from the inputs? Is there enough information to
assist in solving the problem?
* How do one label the important pieces of data that are parts of the problem?

### Explore Examples

* Start with Simple Examples
* Progress to More Complex Examples
* Explore Examples with Empty Inputs
* Explore Examples with Invalid Inputs

### Break It Down

>  Explicitly write out the steps we need to take
> (This forces us to think about the code we write before its written and it
> helps us to identify any conceptual issues or misunderstandings before we begin)

### Simplify

* Find the core difficulty in what we are trying to do
* Temporary ignore that difficulty
* Write a simplified solution
* Then incorporate that difficulty back in

## Look Back and Refactor

### Refactoring Questions

* Can we check the result?
* Can we derive the result differently?
* Can we understand it at a glance?
* Can we use the result or method for some other problem?
* Can you improve the performance of the solution?
* Can we think of other ways to Refactor?
* How have other people solved this problem?

## Problem Solving patterns

* Frequency counters
* Multiple Pointers
* Sliding Windows
* Divide and conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking
* Etc...

### Frequency counters

> This pattern uses objects or sets to collect values / frequencies of values
> This can often avoid the need for the nested loops or 0(N<sup>2</sup>)
> operations with arrays / strings

### Multiple Pointers

> Creating pointers or values that correspond to an index or position and move
> towards the beginning, end or middle based on certain condition.
> (Very efficient for solving problems with minimal space complexity as well)

### Sliding Window

> This pattern involves creating a window which can be either an
> array or number from one position to another
>
> Depending on a certain condition, the window either increases or closes
> (and a new window is created)
>
> Very useful for keeping track of a subset of data in an array / string etc.

### Divide and Conquer

> This pattern involves dividing a data set into smaller chunks and
> then repeating a process with a subset of data.
>
> This pattern tremendously decrease time complexity
