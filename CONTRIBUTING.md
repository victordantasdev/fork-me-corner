# Contributing

Thank you for your interest in contributing to `fork-me-corner`!

## Instructions to clone and modify the project

To contribute, first you need to fork the repository and clone it to your machine.

> You can follow [this documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to learn how to do.

After that, you just need to enter on the directory and install all the 
dependencies with the command:

```bash
$ yarn
```

and start the server with:

```bash
$ yarn dev
```

This will make a next.js page available on your localhost. And that page 
is the [fork-me-corner playground](https://fork-me-corner.vercel.app/) where 
the user can test all component properties and preview how it will look.

To create new features for the fork-me-corner component, just enter the `/src/fork-me-corner/src/fork-me-corner.tsx` directory and you will find all the 
source code of the component itself. So feel free to change and improve the 
code or bring new features that will add value to the component without 
forgetting to always focus on performance and security.

To view the component with the new features added you can access the playground 
page. And if you've added any new properties that can be passed to the component,
don't forget to create an area on the playground page so that users can test and
preview it. To change the page code, just access the `./src/pages/index.tsx` 
directory.

## Instructions to open a Pull Request

Now that all the changes are done and tested, just add them, commit them and 
push them with the commands:

```bash
$ git add .
$ yarn commit
$ git push
```
Now you can follow [this instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to open a Pull Request.

Try to be as descriptive as possible in your PR, if possible add photos and videos of the changes made so that they are approved as soon as possible.

## Guidelines for Code

- Use `TSX` to create new components or new code.
- Use `const` where possible, otherwise `let`. Don't use `var`.
- Always write tests.

## Style

**We follow the aribnb eslint style guide, so:**

- Prefer to create components with arrow functions.
- Use semicolons.
- No space between function names and parens (`someFunction() {}` not 
`someFunction () {}`).
- Always use parentheses around properties of arrow functions.

### And most importantly, have fun coding :)))
