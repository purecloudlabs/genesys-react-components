import React from 'react';
import { AlertBlock } from 'genesys-react-components';

export default function ThemeInfo() {
	return (
		<div>
			<p>This package contains a light and dark theme for components, defaulting to light if no theme is set.</p>
			<h2>CSS Variables</h2>
			<AlertBlock alertType="info">
				<p>
					All applications <strong>MUST</strong> provide values for the CSS vars for the components to display correctly.
				</p>
			</AlertBlock>
			<p>
				Components in this package make use of CSS variables to apply colors.{' '}
				<strong>All apps must provide values for those variables.</strong> This can be done using SCSS, or using any pre-processor that
				yields plain CSS vars, or defining the plain CSS vars directly. The SCSS definition can be found at{' '}
				<code>src/theme/variables.scss</code>. This demo application serves as a full demonstration of consuming the styles from this
				package.
			</p>
			<h3>Using built-in vars with SCSS</h3>
			<p>
				For apps using SCSS compilers, they can simply import the SCSS variables file included in the package and apply them using the
				following SCSS:
			</p>
			<p>
				<pre>
					<code>
						{`@import '../node_modules/genesys-react-components/src/theme/variables.scss';

// Define classes for the light and dark themes
.my-app-light {
	@include writeCssVars($theme-vars);
}

.my-app-dark {
	@include writeCssVars($theme-vars-dark);
}

// Apply theme colors to app-specific elements
body {
	background-color: var($--theme-core-background-color);
	color: var($--theme-core-text-color);
}
`}
					</code>
				</pre>
			</p>
			<p>
				The <code>writeCssVars</code> mixin is used to write out the SCSS vars as CSS vars in the given enclosure. This example writes the
				vars to classes named <code>my-app-light</code> for the light theme and <code>my-app-dark</code> for the dark theme. The app will
				apply this CSS class at its root element and consume the components in this package within that root element to ensure the variables
				are available to the component.
			</p>
			<h3>Defining vars in CSS</h3>
			<p>
				For apps that do not use SCSS and cannot directly consume the SCSS variables file, it must define the CSS variables in its CSS
				output directly. This is typically accomplished by copy/pasting the variables from the SCSS file and reformatting to plain CSS, or
				whatvever pre-processor format is desired. An incomplete example:
			</p>
			<p>
				<pre>
					<code>
						{`// Define classes for the light and dark themes
.my-app-light {
	--theme-core-text-color: #272d2d;
	--theme-core-background-color: #ffffff;
	--theme-core-box-shadow-color: #c1cad688;
	--theme-core-layout-border-color: #dfe9f1;
	...
}

.my-app-dark {
	--theme-core-text-color: #c8c8c8;
	--theme-core-background-color: #37383a;
	--theme-core-box-shadow-color: #2d2d2d;
	--theme-core-layout-border-color: #68686e;
	...
}

// Apply theme colors to app-specific elements
body {
	background-color: var(--theme-core-background-color);
	color: var(--theme-core-text-color);
}
`}
					</code>
				</pre>
			</p>
			<h2>Typography and Other Styles</h2>
			<h3>Typography</h3>
			<p>
				This package comes with a typography definition that provides theme-aware styles to standard HTML constructs. To use the general
				typography styles, simply import `typography.scss` into your application's main SCSS file. The typography definition applies styles
				as children of <code>body</code>. Example import:
			</p>
			<p>
				<pre>
					<code>{`@import '../node_modules/genesys-react-components/src/theme/typography.scss';`}</code>
				</pre>
			</p>
			<h3>Scrollbars</h3>
			<p>The package contains some styles for scrollbars too.</p>
			<p>
				<pre>
					<code>{`@import '../node_modules/genesys-react-components/src/theme/scrollbars.scss';`}</code>
				</pre>
			</p>
			<h3>Roboto</h3>
			<p>
				The package defines <code>Roboto</code> as the font-family for all text. This font can be provided via any desired means, but is
				included in the package for convenience:
			</p>
			<p>
				<pre>
					<code>{`@import '../node_modules/genesys-react-components/src/theme/roboto.scss';`}</code>
				</pre>
			</p>
		</div>
	);
}
