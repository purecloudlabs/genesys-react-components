import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useEffect, useState } from 'react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';

import CopyButton from '../copybutton/CopyButton';

import './CodeFence.scss';

declare global {
	interface Window {
		Prism: any;
	}
}

interface IProps {
	value: string;
	noCollapse?: boolean;
	noHeader?: boolean;
	autoCollapse?: boolean;
	title?: string;
	language?: string;
	showLineNumbers?: boolean;
	indentation?: string | number;
	className?: string;
	jsonEditor?: boolean;
	innerRef?: any;
	disableSyntaxHighlighting?: boolean;
}

export default function CodeFence(props: IProps) {
	const [collapsed, setCollapsed] = useState(props.noCollapse ? false : props.autoCollapse || false);
	const [value, setValue] = useState<string>(props.value);

	useEffect(() => {
		try {
			if (props.language && props.language.toLowerCase() === 'json') {
				const indentation = props.indentation
					? typeof props.indentation === 'string'
						? parseInt(props.indentation)
						: props.indentation
					: 2;
				const parseJ = JSON.parse(value);
				const tempVal = JSON.stringify(parseJ, null, indentation);
				setValue(tempVal);
			}
		} catch (e) {
			console.log(e);
		}
	}, [props.indentation]);

	const bodyClassNames: string[] = ['fence-body'];
	if (props.jsonEditor) bodyClassNames.push('json-editor-body');

	const classNames: string[] = ['fence'];
	if (props.className) classNames.push(props.className);
	if (props.noCollapse) classNames.push('nocollapse');
	if (props.jsonEditor) classNames.push('json-editor-fence');

	const disableHighlighting = props.disableSyntaxHighlighting || value.length > 100000;

	return (
		<div className={classNames.join(' ')}>
			{props.noHeader || typeof value !== 'string' ? (
				''
			) : (
				<div
					className={`fence-header${props.noCollapse ? '' : ' clickable'}`}
					onClick={() => setCollapsed(props.noCollapse ? false : !collapsed)}
				>
					{/* this is a row-reverse flexbox, the JSX is meant to be backwards */}
					{props.noCollapse ? undefined : (
						<GenesysDevIcon icon={collapsed ? GenesysDevIcons.AppChevronDown : GenesysDevIcons.AppChevronUp} />
					)}
					<CopyButton copyText={value} />
					<span className="fence-title">{props.title}</span>
				</div>
			)}
			{collapsed ? undefined : (
				<div ref={props.innerRef || undefined} className={bodyClassNames.join(' ')}>
					{disableHighlighting && (
						<pre>
							<code>{value}</code>
						</pre>
					)}
					{!disableHighlighting && (
						<SyntaxHighlighter language={props.language?.toLowerCase()} style={vscDarkPlus} showLineNumbers={props.showLineNumbers}>
							{value}
						</SyntaxHighlighter>
					)}
				</div>
			)}
		</div>
	);
}
