import React from 'react';
import './LoadingSpinner.scss';

interface IProps {
	size?: 'small' | 'medium' | 'large';
}

export default function LoadingSpinner(props: IProps) {
	return <div className={`loading-spinner ${props.size || 'medium'}`} />;
}
