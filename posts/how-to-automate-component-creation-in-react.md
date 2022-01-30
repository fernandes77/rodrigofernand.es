---
layout: post
date: 2022-01-29 02:46:19
image: /img/how-to-automate-component-creation-in-react.jpg
title: How to automate component creation in React
description: Generate new components without having to import basic libraries
  and write boilerplate code
---
When developing a React project, we constantly have to create new components. This is good practice, as it follows the principles of Atomic Design where you develop a component for every "atom" of your project's Design System.

However, there are some things that have to be done every time we do this. They are usually done by copying and pasting another component, renaming it, renaming constant/variable names inside the files and erasing the rest of the code.

We want to automate this because:

1. It saves time
2. It keeps the boilerplate code consistent across your app

In this article, I will show you how to generate a new component with a simple command.

## Installing Plop.js

Add `plop` to your project with:

```
$ npm install --save-dev plop
```

or, if you're using yarn:

```
$ yarn add -D plop
```

## Creating template files for your component

Create a folder called `generators` at the root of your project. Inside, create another folder called `templates`.

### Index file

Now, create your index React component template file. In my case, every component has an `index.tsx` file so I will create a template file called `index.tsx.hbs`:

```jsx
import * as S from './styles'

const {{pascalCase name}} = () => (
  <S.Wrapper>
    <h1>{{pascalCase name}}</h1>
  </S.Wrapper>
)

export default {{pascalCase name}}
```

What does this do?

When I tell it to generate a component called Button, for example, it will generate an `index.tsx` file like so:

```jsx
import * as S from './styles'

const Button = () => (
  <S.Wrapper>
    <h1>Button</h1>
  </S.Wrapper>
)

export default Button
```

### Styles file

I'm using styled-components so I will also need a `styled.ts.hbs` file:

```js
import styled from 'styled-components'

export const Wrapper = styled.div``
```

This is what we have so far:

![generators](/img/2022-01-29_19-32.png)

## Making it work

Inside the `generators` folder, create a file called `plopfile.js` and paste this code:

```js
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

This will create a folder inside your components folder with the files. You can erase or add actions depending on how many files you have for each component.

Finally, we'll create the script that will do all this work for us. In your `package.json` file, inside `"scripts"`, add the following line:

```js
"generate": "yarn plop --plopfile ./generators/plopfile.js"
```

## No more copying and pasting!

Now, all you have to do to create a new component, for example a `Button`, is go to your terminal run the command:

```
$ npm run generate Button

or

$ yarn generate Button
```

That's it! It will generate the `Button` folder inside `components` which will have the `index.tsx` and `styles.ts` files. If your components have more files (tests, for example) you can easily create the template file and add it to your `plopfile.js` actions.
