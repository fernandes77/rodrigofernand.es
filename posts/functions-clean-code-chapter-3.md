---
layout: post
date: 2022-07-10 11:28:26
image: /img/shahadat-rahman-gnya8vd3otc-unsplash-1-.jpg
title: Functions - Clean Code, Chapter 3
description: Functions are the first line of organization in any program. This
  chapter focuses on how to write them well.
---
What makes a function easy to understand? How can we write functions in a way that communicates its intent well? How can we translate the function's general idea to a casual reader? Each section of this chapter provides an idea.

## Small!

Your functions should really only be a few lines long. The way to achieve this is to do as much method extraction as possible. Bob provides an example of a 64 line function, which he shortens to this:

```java
 public static String renderPageWithSetupsAndTeardowns(
   PageData pageData, boolean isSuite
 ) throws Exception {
   boolean isTestPage = pageData.hasAttribute("Test");
   if (isTestPage) {
     WikiPage testPage = pageData.getWikiPage();
     StringBuffer newPageContent = new StringBuffer();
     includeSetupPages(testPage, newPageContent, isSuite);
     newPageContent.append(pageData.getContent());
     includeTeardownPages(testPage, newPageContent, isSuite);
     pageData.setContent(newPageContent.toString());
   }
   
   return pageData.getHtml();
 }
```

And then this:

```java
public static String renderPageWithSetupsAndTeardowns(
   PageData pageData, boolean isSuite) throws Exception {
   if (isTestPage(pageData))
     includeSetupAndTeardownPages(pageData, isSuite);

   return pageData.getHtml();
 }
```

Note that he reduced many of the 64 lines into functions. Then, he reduced the block inside the `if` statement into a single function. Ideally, everything inside `if` statements, `else` statements, `while` statements, and so on should be a single function call.

## Do one thing

Functions should do one thing. They should do it well. They should do it only.

The famous single-responsibility principle, the “S” in SOLID, applies to functions as well.

## One level of abstraction per function

In order to make sure our functions are doing one thing, we need to make sure that the statements within our function are all at the same level of abstraction. You shouldn't be mixing high-level things such as `getHtml()` with low-level things such as string manipulation.

### Reading code from top to bottom: *the stepdown rule*

Every function should be followed by those at the next level of abstraction so that we can read the program, descending one level of abstraction at a time as we read down the list of functions.

Bob says that writing a function with just one level of abstraction is very difficult to do consistently. But learning how to do it is important. It is the key to keeping functions short and making sure they do one thing.

## Switch statements

What about `switch` statements? How do we make them do one thing when they're designed to do multiple things?

Consider the function:

```java
public Money calculatePay(Employee e)
throws InvalidEmployeeType {
  switch (e.type) {
    case COMMISSIONED:
      return calculateCommissionedPay(e);
    case HOURLY:
      return calculateHourlyPay(e);
    case SALARIED:
      return calculateSalariedPay(e);
    default:
      throw new InvalidEmployeeType(e.type);
  }
}
```

This function has several problems. It's big and it will grow. But the biggest problem is that there is an unlimited number of functions that will have the same structure, such as `isPayday`.

The solution is to bury the `switch` statement in the basement of an abstract factory and never let anyone see it. The factory will use the switch statement to create appropriate instances of the derivatives of `Employee` and the various functions will be dispatched polymorphically through the Employee interface.

```java
public abstract class Employee {
  public abstract boolean isPayday();
  public abstract Money calculatePay();
  public abstract void deliverPay(Money pay);
}
-----------------
public interface EmployeeFactory {
  public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;
}
-----------------
public class EmployeeFactoryImpl implements EmployeeFactory {
  public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {
    switch (r.type) {
      case COMMISSIONED:
        return new CommissionedEmployee(r) ;
      case HOURLY:
        return new HourlyEmployee(r);
      case SALARIED:
        return new SalariedEmploye(r);
      default:
        throw new InvalidEmployeeType(r.type);
    }
  }
}
```

## Use descriptive names

This is the same idea described in chapter 2. The smaller a function is, the easier it is to give it a descriptive name.

We shouldn't be afraid of long names. A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.

## Function arguments

The ideal number of arguments to a function is 0, followed by 1 and 2. 3 or more arguments should be avoided.

Arguments make the code less readable. Arguments make the code harder to test, as you have to test every combination of arguments.

### Common monadic forms

Monadic functions are fairly common and are usually done right. You may be asking a question about a value, such as `boolean fileExists("myFile")`. Or you may be transforming an argument into something else and returning the transformed value.

### Flag arguments

Never do flag arguments. Passing a boolean into a function is a terrible practice. If there are two cases, create two functions.

### Dyadic functions

There are times when dyadic functions are necessary and natural, such as `point P = new Point(0, 0)`.

We will have to write dyadic functions eventually. However, they should be avoided and converted to monads, when possible. They are not readable and you may get the order of the arguments wrong.

### Triads

Think very carefully before creating a triad. They have the same problems as the dyads but doubled. 

### Argument objects

A way of reducing arguments is passing objects. Consider the difference between the following declarations:

`Circle makeCircle(double x, double y, double radius);`

`Circle makeCircle(Point center, double radius);`

### Argument lists

We may want to pass a variable number of arguments into a function.

String.format("%s worked %.2f hours.", name, hours);

If the variable arguments are all treated identically, as they are in the example above, then they are equivalent to a single argument of type `List`. By that reasoning, `String.format` is actually dyadic. Indeed, the declaration of `String.format` as shown below is clearly dyadic:

`public String format(String format, Object... args)`

### Verbs and keywords

In the case of a monad, the function and argument should form a very nice verb/noun pair, such as `write(name)`.

In the case of a dyad, we can encode the names of the arguments into the function name. The function `assertEquals` might be better written as `assertExpectedEqualsActual(expected, actual)`. This getting the arguments order wrong.