---
layout: post
date: 2022-02-12 10:23:08
image: /img/jon-tyson-566cgcrsnck-unsplash-1-.jpg
title: How to name variables, functions, etc - Clean Code, Chapter 2
description: This chapter contains ideas on how to communicate your code's
  intentions through names
---
Since a large chunk of what we do in software development is naming things, Bob has dedicated an entire chapter to it.

## Intention-Revealing Names

Bob introduces this chapter by showing a bad way to name variables: explaining it through a comment.

```java
int d; // elapsed time in days
```

Why not just name it `elapsedTimeInDays`?

The problem with explaining it through a comment is that it is insufficient. The code that uses a variable called `d` will not be as readable as the code that uses `elapsedTimeInDays`. It will be hard to tell what the code does.

Bob also gave this example:

```java
 public List<int[]> getThem() {
   List<int[]> list1 = new ArrayList<int[]>();
   for (int[] x : theList)
     if (x[0] == 4)
       list1.add(x);
   return list1;
 }
```

Since the names `List, getThem, list1, x` are not revealing their intentions, it's impossible to know what this code does. So always use names that explain what your code does.

## Avoid disinformation

This chapter lists a few things to prevent your names from sending other developers in the wrong direction:

* Don't use names that mean something to developers if they don't actually mean it. For example, don't use List if it is just an array and not the actual list from Data Structures.
* Don't use names that are hard to differentiate from one another on a quick read.
* Don't do things such as using l and O as variable names, because they're very similar to 1 and 0.

## Distinguish stuff from one another

Sometimes we write code to satisfy the compiler. We add a number to a variable so that it is different from another variable, we misspell it, among other things.

Imagine finding two variables named `payment` and `paymentObject`. Imagine finding a function named `removeFromCart()`, but then afterwards finding a function named `removeOneFromCart()`. How would you know that `removeFromCart()` doesn't remove just one item from the cart?

## Use pronounceable names