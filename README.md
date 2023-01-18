# Genesys React Components

![npm](https://img.shields.io/npm/v/genesys-react-components)

![npm (tag)](https://img.shields.io/npm/v/genesys-react-components/preview)

A React component library containing standardized form elements. Check out the live demo and full documenation at https://purecloudlabs.github.io/genesys-react-components/

## Installation

```sh
npm i genesys-react-components
# install peer dependencies if necessary
npm i genesys-dev-icons uuid
```

## Usage

```js
import React, { useRef } from 'react';
import { DxTextbox } from 'genesys-react-components';
import { GenesysDevIcons } from 'genesys-dev-icons';

export default function App() {
	const inputRef = useRef < HTMLInputElement > null;
	return (
		<div className="app">
			<DxTextbox
				label="1000ms debounce (default 300), removes focus on value change via onChange callback"
				placeholder="Focus will clear 1 second after you stop typing"
				icon={GenesysDevIcons.AppZoomZoomRight}
				clearButton={true}
				onChange={(value: string) => {
					console.log('1000ms debouncer triggered, clearing focus', value);
					inputRef.current?.blur();
				}}
				changeDebounceMs={1000}
				inputRef={inputRef}
				onFocus={() => console.log('focus')}
				onBlur={() => console.log('blur')}
			/>
		</div>
	);
}
```

## Building Locally

### `genesys-react-components` package

In the root of the repo, run:

```sh
npm i
npm run build
```

This clears the build folder and rebuilds the package from source using the rollup configuration to produce single-file libraries.

When validating the package locally, run `npm link` in the root of this repo to create a local symlink in npm for `genesys-react-components` that points to the locally built package. Take note of the _Error: Invalid hook call_ notice in the troubleshooting section below.

### Deploy Component Package to NPM

1. Ensure the version number has been incremented appropriately in `package/package.json` in the format `x.y.x` using semantic versioning rules
2. Run the `devengage-publish-npm-package` Jenkins job for this package
   1. Branch builds will have the branch name and build number appended to the package version

### Demo app5

To build and serve the demo app locally, run:

```sh
cd app
npm install
npm run start
```

To validate the local instance of the `genesys-react-components` package, run:

```sh
cd app
# This removes the published dependency and uses npm link to add the local version
npm run link
npm run start
```

Alternatively, run `npm run rebuildlibandstart` after `npm run link` to setup the localbuild of `genesys-react-components` and start the app

Run `npm run unlink` to revert to using the latest published version of the package.

#### Publishing the demo app

Mainline builds of the `devengage-publish-npm-package` Jenkins job publish the doc site.

## Troubleshooting

### Error: Invalid hook call

The following error may be encountered at runtime while running a React app locally when using `npm link genesys-react-components` to load the local package:

```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

The cause of the issue is the first reason. The react-dom dependency is sourced from different locations for the component package and the React app that's using it. The package loads `<thisrepo>/node_modules/react_dom/` but the React app loads `<thisrepo>/app/node_modules/react-dom/` causing them to be different packages even though the loaded versions are identical.

The solution is to delete `<thisrepo>/node_modules/` when using `npm link` in a any local React app. It doesn't seem to matter the order of operations as long as the folder is gone before `npm run start` is run to build the React app.

## Concepts and Best Practices

### What SHOULD go in this package?

This package yields two conceptual things: React components and style information.

Components should be added to this package that provide _functionality_ beyond the base HTML elements and built-in JSX/React constructs. This functionality may be complex and interact with the user, like buttons and text boxes, but can also be simple and provide standardization with no user interaction, like the loading placeholder.

Style information can be added to the package in two primary ways.

The most straightforward is to apply styles to a component in the package. A component should have a file of the same name, but with the `.scss` file extension to contain its styles.

The package also provides general-purpose style information using selectors that apply to base HTML elements. These are broken out into a few individual files that can be consumed individually:

- `src/theme/variables.scss` - The variables definition can be used by consuming applications to make any part of its own UI theme-aware. This is typically applied to the page's background, text colors, and custom components in the app.
- `src/theme/typography.scss` - This file sets base theme style rules controlling the default colors and fonts. These rules apply to standard HTML elements, not components in the package.
- `src/theme/roboto.scss` - The _Roboto_ font.
- `src/theme/scrollbars.scss` - Styles for scrollbars

### What SHOULD NOT go in this package?

This package is not a shim for base HTML elements. As such, it should not contain components that neither provide custom functionality nor extend/enhance/normalize base HTML elements.
