---
layout: post
date: 2022-01-27 11:12:37
image: /public/img/jake-walker-mpkqidpmyqu-unsplash.jpg
title: How to automate component creation in React
description: Generate new components without having to import basic libraries
  and write boilerplate code
---
When developing a React project, we constantly have to create new components. This is good practice, as it follows the principles of Atomic Design where you develop a component for every "atom" of your project's Design System.

However, there are some things that have to be done every time we do this. They are usually done by copying and pasting another component, renaming it, renaming constant/variable names inside the files and erasing the rest of the code.

We want to automate this because:

1. It saves time
2. It keeps the boilerplate code consistent across your app

## Installing Plop.js

Add plop to your project with:

```
$ npm install --save-dev plop
```

or, if you're using yarn:

```
$ yarn add -D plop
```

## Configuring Plop.js

Create a folder called **generators** at the root of your project.

Let's say my component architecture is a folder with an **index.tsx** file and a **styles.ts** file. Create a file called **plopfile.js** inside generators and paste this config:

```

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      }
    ]
  })
}
```