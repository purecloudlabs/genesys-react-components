import React from 'react';
import { LoadingSpinner } from 'genesys-react-components';

export default function LoadingSpinnerDemo() {
	return (
		<div>
			<p>
				Similar to the <code>LoadingPlaceholder</code>, use the <code>LoadingSpinner</code> to display a visual element while awaiting an
				asynchronous operation.
			</p>
			<h3>Example</h3>
			<pre>
				<code>{`<LoadingSpinner size="small" />`}</code>
			</pre>
			<LoadingSpinner size="small" />

			<pre>
				<code>{`<LoadingSpinner size="medium" />`}</code>
			</pre>
			<LoadingSpinner size="medium" />

			<pre>
				<code>{`<LoadingSpinner size="large" />`}</code>
			</pre>
			<LoadingSpinner size="large" />
		</div>
	);
}
