---
layout: post
date: 2022-03-06 10:59:21
image: /img/black-and-red-simple-tips-how-to-be-a-programmer-youtube-thumbnail-1-.png
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

If a name is unpronounceable, it probably needs to be explained to new developers.

Also, Bob says, it is a little bit difficult to discuss it in meetings without sounding like an idiot.

## Use searchable names

Code editors nowadays have a lot of useful tools to search pieces of code. However, in a large codebase it is very difficult to find what you look for without getting a lot of other results.

Generic variable names can yield hundreds of results when searching for them. So we have to name them in a way that makes them easy to be found.

## Name functions with verbs

Functions and methods should usually have a verb in their name because they do something (obviously!).

If it returns a boolean, name it with `is`. If it is an accessor/mutator, name it with `get`/`set`. Otherwise, use an appropriate verb for what it does.

## Use the same name for the same stuff

Pick one word for one abstract concept and stick with it. If there already is a lot of functions with the verb `fetch`, do not use `get` or `retrieve` for new functions. Stick with the existing patterns.

However, some verbs are ambiguous. You might use `add` for a function which performs a mathematical operation and for a function which inserts a value into an array. In this case, it is better to use different verbs, since they perform different tasks.

## Use solution domain names before problem domain names

Remember that people who read your code are programmers. They might not be fully aware of every aspect of the project's business rules. They will always know what a `AccountController` is, though.

When there is no space for solution domain names, use problem domain names. At least the programmer can ask an expert if they're unsure what it means.

## Add meaningful context

Some names are meaningful in and of themselves. If a name isn't, it is our job to provide the necessary context so that our code is readable.

Variables named `street`, `city`, `state` are obviously referring to an address. But what if you see the variable `state` out of context? How would you know it is the state of an address? The best solution here would be to create a class called `Address`.

## Don't add gratuitous context

Do not add context that makes it harder to code. If you have an application called Gas Station Deluxe, don't add a `GSD` prefix to every class. You will type in `G` and your IDE's autocompletion list will be very long.

## Conclusion

This chapter is very related to human social skills more than anything else. This is because the problem of naming things is a cultural one. It relates to our ability of communicating with our team, something that seems to be lacking with developers when compared to other professions. Chapter 2 is here to change that.