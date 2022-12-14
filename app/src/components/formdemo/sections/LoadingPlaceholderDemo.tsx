import React, { useState } from 'react';
import { DxButton, LoadingPlaceholder } from 'genesys-react-components';

export default function LoadingPlaceholderDemo() {
	const [randomKey, setRandomKey] = useState<number>(Date.now());
	return (
		<div>
			<p>
				Use the <code>LoadingPlaceholder</code> to display a visual element while awaiting an asynchronous operation. The text can be
				specified or randomized placeholder text will be used.
			</p>
			<h3>Example</h3>
			<pre>
				<code>
					{`<LoadingPlaceholder
	text='LoadingPlaceholder text example'
/>`}
				</code>
			</pre>
			<LoadingPlaceholder text="LoadingPlaceholder text example" />
			<h3>Randomized Text</h3>
			<p>
				The loading placeholder will use randomized text inspired by Sim City loading messages if <code>text</code> is not set. Set the text
				to whitespace to not show any message.
			</p>
			<p>
				<DxButton onClick={() => setRandomKey(Date.now())}>Randomize</DxButton>
			</p>
			<LoadingPlaceholder key={randomKey} />
		</div>
	);
}
