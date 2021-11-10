export interface StringChangedCallback {
	(value: string): void;
}
export interface BooleanChangedCallback {
	(value?: boolean): void;
}

export interface VoidEventCallback {
	(): void;
}
