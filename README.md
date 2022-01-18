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

## Examples

<table>
  <tr>
    <th>Default corner</th>
    <th>Colored corner</th>
  </tr>

  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/64330605/149931105-9e9a6768-60d3-44ff-9a08-ea3ba9063682.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/64330605/149930859-fca82545-afc1-441f-b61c-972a8b390b75.png">
    </td>
  </tr>
</table>
