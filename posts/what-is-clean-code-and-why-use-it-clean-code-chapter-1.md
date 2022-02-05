---
layout: post
date: 2022-02-05 01:41:08
title: What is Clean Code and why use it? - Clean Code, Chapter 1
description: This chapter creates the concept of Clean Code and defines the
  reasons for it's existence
---
First, a brief introduction. This will be a series of articles dedicated to the book Clean Code written by Robert C. Martin. The main reason for this is for studying purposes. I also think that the concepts taught in this book are some of the most important things you can learn as a programmer. As the book says, entire projects can be ruined by bad code and a fortune is spent trying to fix it.

## Code will never be gone

Robert C. Martin (or uncle Bob) argues that there will always be code, because there will always be the language in which we express the requirements to a machine. This language might get closer to the actual requirements, but it will always be a language, and therefore code. I agree with that. The human mind and a machine's "mind" are fundamentally different. They will always require translation between each other.

## Bad code and it's consequences

Bad code is something that even beginners know how to recognize. They might find it hard to read or get tired of all the repetitions. Bad code makes us feel like something isn't right while working.

If only that was the end of it. The reality is that it causes a lot of difficulty maintaining large projects. This can be very costly to companies, as management finds out that programmers will have to stop what they're doing and figure out this mess. Management might try to fix it by hiring more programmers, but this will only make things less efficient. They are new to the codebase and it will take time before they can untangle the messy code and be a little productive.

Eventually, the solution is a miraculous redesign that will fix all problems. However, the new project will be in a race to catch up with the old one as the old one is also getting new features (a company can't just stop everything and wait for a redesign). This race can take several years. When it ends, the "new" codebase might be just as messy as the old one.

## Let's face it: if we write bad code, it is our fault

I think we all have been tempted to blame something else for bad code. Tight deadlines, clueless managers, changes in requirements, etc. I have felt the pressure of delivering something quickly and thinking: "This is pretty bad code, but I don't have time to think about this right now".

The thing is, looking back, I did have the time. That piece of bad code cost me a bunch of time later on in the project.

How do we deal with the unrealistic expectations of managers, deadlines, marketing, etc? We have to comunicate with them, something that programmers usually don't do enough of. Often times these people have absolutely no idea what we do and they look to us for information. As Bob says, it's their job to defend the schedule and it's *our* job to defend the code.

We have to accept it: bad code means **going slow**.

## Clean Code, according to experienced programmers

Bob asked for aspects that define Clean Code. These were the responses:

### Bjarne Stroustrup, inventor of C++ and author of The C++ Programming Language

* Is *elegant* and *efficient*
* Makes it hard for bugs to hide
* Has minimal dependencies, to ease maintenance
* Has complete error handling
* Has performance close to optimal, with no *unprincipled* optimizations
* Does *one* thing well

### Grady Booch, author of Object Oriented Analysis and Design with Applications

* Is *simple* and *direct*
* Reads like a well written prose
* Never obscures the designer's intent
* Is full of *crisp* abstractions and *straightforward* lines of control

### “Big” Dave Thomas, founder of OTI, godfather of the Eclipse strategy

* Can be read and enhanced by *other* developers
* Has unit and acceptance *tests*
* Provides *one* way of doing *one* thing
* Has minimal dependencies
* Provides a clear and minimal API
* Should be *literate* (readable by humans)

### Michael Feathers, author of Working Effectively with Legacy Code

* Looks like it was written by someone who *cares*
* If you try to improve it, you're led back to where you are

### Ron Jeffries, author of Extreme Programming Installed and Extreme Programming Adventures in C#

* Runs all the tests
* Contains *no duplication*
* Expresses all the design ideas that are in the system
* Minimizes the number of entities such as classes, methods, functions, and the like

### Ward Cunningham, inventor of Wiki, inventor of Fit, coinventor of eXtreme Programming, motive force behind Design Patterns, Smalltalk and OO thought leader

* When you read it, it is pretty much what you *expected*
* Makes it look like the language was written for the problem

## Conclusion

### Authors are read

Authors spend very little time writing, compared to the time spent by the reading. This is the same in programming. We spend a lot of time reading code in order to write our own. For this reason, code should be easier to read even if it is harder to write.

### The boy scout rule

"Leave the campground cleaner than you found it."

Leave your codebase cleaner than you found it.