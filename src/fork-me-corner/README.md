# fork-me-corner

![CI](https://github.com/victordantasdev/fork-me-corner/actions/workflows/main.yml/badge.svg)

`fork-me-corner` is a react component available on npm to easily link to your project on github and is made using React, TypeScript and styled-components.

And you can configure the component as you like by changing the background color by passing a string with a hex code to a `bgColor` property just as you can change the color of the GitHub logo by passing an `octoColor` property. In addition you can pass to a `prideFlag` property the name of 17 LGBTQIA+ flags available in the component and you can pass to a `flagDirection` property the `vertical` or `horizontal` properties to determine in which direction the flag will appear in the component background.

> You can test, visualize, generate and copy the component on [fork-me-corner playground](https://fork-me-corner.vercel.app)

## Install

```bash
npm i fork-me-corner
```

or

```bash
yarn add fork-me-corner
```

## Usage

```tsx
import { ForkMe } from 'fork-me-corner';

const App = () => (
  <ForkMe repo="https://github.com/user/repo" />
)
```

You can also pass `bgColor` prop as a hexadecimal string to change the color of background, and `octoColor` to change the color of octocat!

```tsx
import { ForkMe } from 'fork-me-corner';

const App = () => (
  <ForkMe 
    repo="https://github.com/user/repo" 
    bgColor="#282a36"
    octoColor="#ff79c6"
  />
)
```

## Examples

### Basic corner configs

|name|print|
|---|---|
|default corner|![default](https://user-images.githubusercontent.com/64330605/153068912-d8d04e41-36f0-4e00-ac95-452cd31b1375.png)|
|colored corner|![colored](https://user-images.githubusercontent.com/64330605/153068907-6a43adbd-97ec-4eba-a43e-d9dae8dcf916.png)|

### With LGBTQIA+ configs

|flag|print| |flag|print|
|---|---|---|---|---|
|lgbtqia_plus|![lgbtqia_plus](https://user-images.githubusercontent.com/64330605/153068566-d1a8d8c1-60e3-4d69-81dd-97aeb93610a8.png)| |genderqueer|![genderqueer](https://user-images.githubusercontent.com/64330605/153068562-6f0ef912-7492-4bcf-85df-aa2726f7e0a6.png)| |
|agender|![agender](https://user-images.githubusercontent.com/64330605/153068534-9236e8a4-00b5-48e2-a133-f29312926dd6.png)| |lesbian|![lesbian](https://user-images.githubusercontent.com/64330605/153068563-aacb6a26-9a45-4e49-ba48-8ffc8cd02a1c.png)| |
|androgyne|![androgyne](https://user-images.githubusercontent.com/64330605/153068539-f52d4181-9968-4f37-9e0d-25c6bc14e5ad.png)| |neutrois|![neutrois](https://user-images.githubusercontent.com/64330605/153068568-a9e44d74-78ba-4a7d-8ec5-31bf4269264b.png)| |
|aromantic|![aromantic](https://user-images.githubusercontent.com/64330605/153068543-e3809fd3-fd70-43cc-ad77-2960dbe5cc7a.png)| |nonbinary|![nonbinary](https://user-images.githubusercontent.com/64330605/153068569-f59716d1-167e-4cbb-a8de-2e686781bd19.png)| |
|assexual|![assexual](https://user-images.githubusercontent.com/64330605/153068546-068a1738-5c43-403b-946b-15b7b59b51e4.png)| |pansexual|![pansexual](https://user-images.githubusercontent.com/64330605/153068571-fcae7ac3-3df6-477e-8630-d7e954109c07.png)| |
|bisexual|![bisexual](https://user-images.githubusercontent.com/64330605/153068548-7a8b3a64-1b14-4654-95b2-81446b070212.png)| |philly|![philly](https://user-images.githubusercontent.com/64330605/153068574-269fdfc4-d869-4858-8321-17f06998b00e.png)| |
|demiboy|![demiboy](https://user-images.githubusercontent.com/64330605/153068552-ade3b827-03ce-4785-bdd6-5693969e02be.png)| |polysexual|![polysexual](https://user-images.githubusercontent.com/64330605/153068576-713e269c-2569-4314-aa1f-3b647dadce20.png)| |
|demigirl|![demigirl](https://user-images.githubusercontent.com/64330605/153068556-8029ee0e-6557-4e9e-ac2f-1cab42c66031.png)| |transgender|![transgender](https://user-images.githubusercontent.com/64330605/153068579-2a572254-4cd0-450c-85b3-76df486a0a34.png)| |
|genderfluid|![genderfluid](https://user-images.githubusercontent.com/64330605/153068559-29405e24-fe6e-4309-9da5-fe37b63dfc87.png)|
