import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import React, { useState } from 'react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';

import CopyButton from '../copybutton/CopyButton';
import { BaseComponentProps } from '..';

import './CodeFence.scss';

declare global {
	interface Window {
		Prism: any;
	}
}

interface IProps extends BaseComponentProps {
	value: string;
	noCollapse?: boolean;
	noHeader?: boolean;
	autoCollapse?: boolean;
	title?: string;
	language?: string;
	showLineNumbers?: boolean;
	indentation?: string;
	className?: string;
	jsonEditor?: boolean;
	innerRef?: any;
	disableSyntaxHighlighting?: boolean;
}

export default function CodeFence(props: IProps) {
	const [collapsed, setCollapsed] = useState(props.noCollapse ? false : props.autoCollapse || false);

	const bodyClassNames: string[] = ['fence-body'];
	if (props.jsonEditor) bodyClassNames.push('json-editor-body');

	const classNames: string[] = ['fence'];
	if (props.className) classNames.push(props.className);
	if (props.noCollapse) classNames.push('nocollapse');
	if (props.indentation) classNames.push(`indent-${props.indentation}`);
	if (props.jsonEditor) classNames.push('json-editor-fence');

	const disableHighlighting = props.disableSyntaxHighlighting || props.value.length > 100000;

	return (
		<div id={props.id} className={classNames.join(' ')}>
			{props.noHeader || typeof props.value !== 'string' ? (
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
					<CopyButton copyText={props.value} />
					<span className="fence-title">{props.title}</span>
				</div>
			)}
			{collapsed ? undefined : (
				<div ref={props.innerRef || undefined} className={bodyClassNames.join(' ')}>
					{disableHighlighting && (
						<pre>
							<code>{props.value}</code>
						</pre>
					)}
					{!disableHighlighting && (
						<SyntaxHighlighter language={props.language?.toLowerCase()} style={vscDarkPlus} showLineNumbers={props.showLineNumbers}>
							{props.value}
						</SyntaxHighlighter>
					)}
				</div>
			)}
		</div>
	);
}
