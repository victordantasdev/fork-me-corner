# Fork me Corner

> A component to easily put a fork-me corner on your projects.

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
