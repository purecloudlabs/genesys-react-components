# Genesys React Components

A React component library containing standardized form elements. Check out the live demo and full documenation at https://purecloudlabs.github.io/genesys-react-components/

## Installation

```sh
npm i genesys-react-components
# install peer dependencies if necessary
npm i genesys-dev-icons uuid

# or

yarn add genesys-react-components
# install peer dependencies if necessary
yarn add genesys-dev-icons uuid
```

## Usage

```js
import React, { useRef } from 'react';
import { DxTextbox } from 'genesys-react-components';
import { GenesysDevIcons } from 'genesys-dev-icons';

export default function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<div className='app'>
			<DxTextbox
				label='1000ms debounce (default 300), removes focus on value change via onChange callback'
				placeholder='Focus will clear 1 second after you stop typing'
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

### Demo app

To build and serve the demo app locally, run:

```sh
cd app
yarn install
yarn start
```

To validate the local instance of the `genesys-react-components` package, run:

```sh
cd app
# This removes the published dependency and uses npm link to add the local version
yarn linklib
yarn start
```

Run `yarn unlinklib` to revert to using the latest published version of the package.

#### Publishing the demo app

Run the following command to publish the demo app to the GitHub Pages site:

```
cd app
yarn unlinklib
yarn deploy
```

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

The solution is to delete `<thisrepo>/node_modules/` when using `npm link` in a any local React app. It doesn't seem to matter the order of operations as long as the folder is gone before `yarn start` is run to build the React app.
