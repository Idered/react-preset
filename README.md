<h1 align="center">React Preset</h1>
<p align="center">
  <img  alt="npm" src="https://img.shields.io/npm/v/react-preset?color=blue" />
  <img
    alt="npm bundle size"
    src="https://img.shields.io/bundlephobia/min/react-preset"
  />
  <img
    alt="CI"
    src="https://github.com/Idered/react-preset/workflows/CI/badge.svg?event=push"
  />
</p>
<p align="center">Smash your props into single `preset` prop.<p>
<p align="center">
  <a href="https://codesandbox.io/s/react-preset-tphq6"
    ><img
      alt="Edit react-preset"
      src="https://codesandbox.io/static/img/play-codesandbox.svg"
  /></a>
<p>

![](.github/example.png)

## Quick start

```sh
npm install react-preset
```

1.  Create preset object and extend TypeScript definitions:
```tsx
// preset.tsx
const preset = {
  // Preset group name
  button: {
    // Single preset
    save: {
      // These props should be handled by component
      children: 'Save',
      appearance: 'primary'
    },
    cancel: {
      children: 'Cancel',
      appearance: 'minimal'
    }
  }
}

declare module 'react-preset' {
  export interface DefaultPreset extends Required<typeof preset> {}
}

export default preset
```

2. Wrap your App component with preset provider
```tsx
// App.tsx
import {PresetContext} from 'react-preset'
import Button from './Button'
import preset from './preset'

const App = () => (
  <PresetContext.Provider value={preset}>
    <Button preset="cancel" />
    <Button preset="save" />
  </PresetContext.Provider>
);
```

3. Wrap your component with `withPreset`

```jsx
// Button.tsx
import * as React from 'react'
import {withPreset} from 'react-preset'

type Props = {
  appearance: 'minimal' | 'primary'
}

const Button: React.FC<Props> = (props) => <button {...props}/>

export default withPreset('button')(Button)
```


Check [example directory]('./example) to learn more.


## API

### `PresetContext`
Used to provide presets to components.

```tsx
<PresetContext.Provider value={preset}>
  <Page />
</PresetContext.Provider>
```

### `usePreset`
Hook used to get access to all presets inside component.

```tsx
const MyComponent = () => {
  const presets = usePreset()
  // presets.button.save
}
```

### `withPreset(groupName)(component)`
Apply preset to component.

```tsx
const Card = () => <div {...props} />

export default withPreset('card')(Card)
```



