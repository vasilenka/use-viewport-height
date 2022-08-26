# use-viewport-height

## Install

```bash
npm install use-viewport-height
// or
yarn add use-viewport-height
```

## Usage

```jsx
// 1. Import the hooks
import useViewportHeight from 'use-viewport-height'

const App = () => {

  // 2. Add it to your app
  useViewportHeight()

  return (...)
}
```

and anywhere in your css file you can access the viewport height with: `var(--tenka-viewport-height)`

```css
.my-div {
  height: var(--tenka-viewport-height);
}
```
