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

The famous single-responsibility principle, the "S" in SOLID, applies to functions as well.

## One level of abstraction per function

In order to make sure our functions are doing “one thing,” we need to make sure that the
statements within our function are all at the same level of abstraction.